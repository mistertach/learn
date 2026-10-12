/* Mandar emails (por ahora solo el de "olvidé mi contraseña").
   Usa Resend (https://resend.com) por HTTP, sin dependencias: hacen falta RESEND_API_KEY y MAIL_FROM.
   Sin eso, en tu compu el link se muestra en la consola; en Vercel, el juego avisa que no está configurado. */
const configurado = () => !!(process.env.RESEND_API_KEY && process.env.MAIL_FROM);
const enLaCompu = () => !process.env.VERCEL && process.env.NODE_ENV !== 'production';

const TEXTOS = {
  en: {asunto:'Choose a new password', hola:'Hello', cuerpo:'Someone (hopefully you) asked to change the password of your account in The Adventures. Open this link to choose a new one. It works for one hour.', boton:'Choose a new password', nada:'If you didn’t ask for this, you can ignore this email.'},
  es: {asunto:'Elegí una contraseña nueva', hola:'Hola', cuerpo:'Alguien (ojalá vos) pidió cambiar la contraseña de tu cuenta en Las aventuras. Abrí este link para elegir una nueva. Sirve por una hora.', boton:'Elegir una contraseña nueva', nada:'Si no lo pediste, podés ignorar este email.'},
  fr: {asunto:'Choisissez un nouveau mot de passe', hola:'Bonjour', cuerpo:'Quelqu’un (vous, sans doute) a demandé à changer le mot de passe de votre compte dans Les aventures. Ouvrez ce lien pour en choisir un nouveau. Il est valable une heure.', boton:'Choisir un nouveau mot de passe', nada:'Si vous n’avez rien demandé, ignorez cet email.'},
  it: {asunto:'Scegli una nuova password', hola:'Ciao', cuerpo:'Qualcuno (speriamo tu) ha chiesto di cambiare la password del tuo account in Le avventure. Apri questo link per sceglierne una nuova. Vale per un’ora.', boton:'Scegli una nuova password', nada:'Se non l’hai chiesto tu, puoi ignorare questa email.'}
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

async function mandarRecupero(email, nombre, link, idioma){
  const t = TEXTOS[idioma] || TEXTOS.en;
  if(!configurado()){
    if(enLaCompu()){ console.log(`\n[correo] Para ${email}: ${link}\n`); return; }
    throw Object.assign(new Error('El envío de emails no está configurado'), {status:503, codigo:'sin_correo'});
  }
  const html = `<div style="font-family:system-ui,sans-serif;font-size:16px;color:#22314F;max-width:480px">
    <p>${esc(t.hola)}${nombre ? ' ' + esc(nombre) : ''},</p><p>${esc(t.cuerpo)}</p>
    <p><a href="${esc(link)}" style="display:inline-block;background:#2FBF8F;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:700">${esc(t.boton)}</a></p>
    <p style="color:#5C6A86;font-size:14px">${esc(t.nada)}</p></div>`;
  const r = await fetch('https://api.resend.com/emails', {
    method:'POST',
    headers:{'Authorization':`Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type':'application/json'},
    body: JSON.stringify({from:process.env.MAIL_FROM, to:[email], subject:t.asunto, html, text:`${t.cuerpo}\n\n${link}\n\n${t.nada}`})
  });
  if(!r.ok){ console.error('Resend', r.status, await r.text().catch(()=>'')); throw Object.assign(new Error('No se pudo mandar el email'), {status:502, codigo:'correo_fallo'}); }
}

/* sin configurar y online: se avisa antes de buscar la cuenta, así la respuesta no dice si el email existe */
function exigirCorreo(){ if(!configurado() && !enLaCompu()) throw Object.assign(new Error('El envío de emails no está configurado'), {status:503, codigo:'sin_correo'}); }

module.exports = { mandarRecupero, configurado, exigirCorreo };
