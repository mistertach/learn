/* Prueba de voces: genera las mismas frases del juego con ElevenLabs y con Google (Chirp 3 HD)
   y arma una página para escucharlas lado a lado, junto a la voz de la compu.

   Uso (en tu compu, con las claves en .env o en el entorno):
     node scripts/voces-prueba.js --ver                 → muestra las frases y cuántos caracteres gasta, sin llamar a nada
     node scripts/voces-prueba.js --voces               → lista las voces disponibles en cada servicio
     node scripts/voces-prueba.js                       → genera todo y escribe voz-prueba/index.html
     node scripts/voces-prueba.js --solo=es,ar --proveedor=eleven
   Lo ya generado no se vuelve a pedir (borrá el mp3 para rehacerlo).

   Variables (.env):
     ELEVENLABS_API_KEY   clave de https://elevenlabs.io (Profile → API keys)
     ELEVENLABS_MODELO    opcional, por defecto eleven_multilingual_v2 (eleven_flash_v2_5 gasta la mitad)
     ELEVENLABS_VOZ       opcional, id de la voz para todos los idiomas (sin esto usa la primera de tu cuenta)
     ELEVENLABS_VOZ_ES, _FR, _IT, _EN, _AR   opcional, una voz por idioma (por ejemplo, una del Golfo para el árabe)
     GOOGLE_TTS_API_KEY   clave de Google Cloud con la API Text-to-Speech activada
     GOOGLE_VOZ_ES, _FR, _IT, _EN, _AR       opcional, nombre completo de la voz (ej. es-US-Chirp3-HD-Aoede) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const RAIZ = path.join(__dirname, '..'), SALIDA = path.join(RAIZ, 'voz-prueba');

// .env sin dependencias (igual que scripts/dev.js)
try{ for(const l of fs.readFileSync(path.join(RAIZ, '.env'), 'utf8').split('\n')){ const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/); if(m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, ''); } }catch(e){}

const arg = n => { const a = process.argv.find(x => x === '--'+n || x.startsWith('--'+n+'=')); return a == null ? null : (a.split('=')[1] ?? true); };
const IDIOMAS = (arg('solo') || 'es,fr,it,en,ar').split(',');
const PROVEEDORES = (arg('proveedor') || 'eleven,google').split(',');
const NOMBRE = 'Nico';

const { GOOGLE_LOCAL, SERVICIOS, vozDe } = require('../servidor/voces');
const { LUGARES, muestrasDe } = require('./voces-muestras');
const LOCAL = {es:'es-AR', fr:'fr-FR', it:'it-IT', en:'en-US', ar:'ar-AE'};   // para la voz de la compu

/* ---------- las frases de prueba, sacadas del juego ---------- */
function muestras(lang){
  const caps = {};
  const ctx = {console, registrarIdioma(){}, registrarCapitulo(){}, registrarTextos(id, lg, o){ caps[id] = o; }};
  ctx.window = ctx; vm.createContext(ctx);
  for(const id of LUGARES) vm.runInContext(fs.readFileSync(path.join(RAIZ, 'capitulos', id, lang+'.js'), 'utf8'), ctx);
  return muestrasDe(caps, lang, NOMBRE);
}

async function listarVoces(){
  for(const [k, S] of Object.entries(SERVICIOS)){
    if(!S.configurado()){ console.log(`\n${S.nombre}: falta la clave`); continue; }
    for(const lang of (k === 'eleven' ? ['es'] : IDIOMAS)){
      const lista = await S.voces(lang);
      console.log(`\n${S.nombre}${k === 'eleven' ? ' (tus voces, sirven para todos los idiomas)' : ' '+GOOGLE_LOCAL[lang]}:`);
      for(const v of lista) console.log(`  ${v.id}  ${v.nombre}`);
    }
  }
}

/* ---------- la página para escuchar ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function pagina(todo, hechos){
  const filas = lang => todo[lang].map((m, i) => {
    const btn = p => fs.existsSync(path.join(SALIDA, p, `${lang}-${i}.mp3`))
      ? `<label><input type="radio" name="${lang}-${i}" value="${p}"><button data-src="${p}/${lang}-${i}.mp3">${SERVICIOS[p].nombre}</button></label>` : '<span class="no">—</span>';
    return `<tr><td class="tipo">${m.tipo}</td><td>${esc(m.ver)}${m.ver !== m.decir ? `<small dir="rtl">${esc(m.decir)}</small>` : ''}</td>
      <td><label><input type="radio" name="${lang}-${i}" value="compu"><button data-tts="${esc(m.decir)}" data-lang="${LOCAL[lang]}">Compu</button></label></td>
      ${PROVEEDORES.map(p => `<td>${btn(p)}</td>`).join('')}</tr>`;
  }).join('');
  return `<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Prueba de voces</title>
<style>
:root{--bg:#f6f7fb;--card:#fff;--ink:#22314f;--soft:#6b7690;--acc:#2f80ed;--ok:#27ae60}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.4 system-ui,sans-serif;padding:16px}
main{max-width:980px;margin:0 auto} h1{margin:.2em 0} p{color:var(--soft)}
section{background:var(--card);border-radius:14px;padding:12px 16px;margin:16px 0;overflow-x:auto}
table{border-collapse:collapse;width:100%} td{padding:6px 8px;border-top:1px solid #eef0f5;vertical-align:middle}
td small{display:block;color:var(--soft);font-size:15px}
.tipo{color:var(--soft);font-size:13px;white-space:nowrap}
button{border:0;border-radius:10px;background:#e8f0fd;color:var(--acc);font-weight:700;padding:8px 12px;cursor:pointer;white-space:nowrap}
button.sonando{background:var(--acc);color:#fff}
label{display:inline-flex;align-items:center;gap:4px} input:checked+button{outline:3px solid var(--ok)}
.no{color:#c0c5d2} .total{font-weight:700}
</style>
<main>
<h1>Prueba de voces</h1>
<p>Tocá cada botón para escuchar la misma frase con cada voz. Marcá el círculo de la que más te guste en cada fila; abajo de cada idioma se suma cuál ganó.</p>
${IDIOMAS.map(l => `<section><h2>${l.toUpperCase()}</h2><table>${filas(l)}</table><p class="total" data-total="${l}"></p></section>`).join('')}
</main>
<script>
let audio=null;
const parar=()=>{ if(audio){audio.pause();audio=null;} speechSynthesis.cancel(); document.querySelectorAll('.sonando').forEach(b=>b.classList.remove('sonando')); };
document.addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b) return; e.preventDefault(); parar(); b.classList.add('sonando');
  if(b.dataset.src){ audio=new Audio(b.dataset.src); audio.onended=parar; audio.play(); }
  else { const u=new SpeechSynthesisUtterance(b.dataset.tts); u.lang=b.dataset.lang; const v=speechSynthesis.getVoices().find(v=>v.lang.replace('_','-').startsWith(u.lang.slice(0,2))&&!/Multilingual/.test(v.name)); if(v) u.voice=v; u.onend=parar; speechSynthesis.speak(u); }
  const r=b.previousElementSibling; if(r) r.checked=true; contar(); });
const KEY='voz-prueba'; let elegidas={}; try{ elegidas=JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){}
document.querySelectorAll('input[type=radio]').forEach(r=>{ if(elegidas[r.name]===r.value) r.checked=true; });
function contar(){ const t={}; document.querySelectorAll('input[type=radio]:checked').forEach(r=>{ elegidas[r.name]=r.value; const l=r.name.split('-')[0]; (t[l]=t[l]||{})[r.value]=(t[l][r.value]||0)+1; });
  try{ localStorage.setItem(KEY,JSON.stringify(elegidas)); }catch(e){}
  document.querySelectorAll('[data-total]').forEach(p=>{ const x=t[p.dataset.total]||{}; p.textContent=Object.keys(x).length?'Elegidas: '+Object.entries(x).map(([k,n])=>k+' '+n).join(' · '):''; }); }
document.addEventListener('change',contar); contar();
</script></html>`;
}

/* ---------- todo junto ---------- */
(async () => {
  const todo = {}; for(const l of IDIOMAS) todo[l] = muestras(l);
  const chars = l => todo[l].reduce((a, m) => a + m.decir.length, 0);
  console.log('Frases de prueba:'); for(const l of IDIOMAS) console.log(`  ${l}: ${todo[l].length} frases, ${chars(l)} caracteres`);
  console.log(`  total: ${IDIOMAS.reduce((a, l) => a + chars(l), 0)} caracteres por servicio`);
  if(arg('ver')){ for(const l of IDIOMAS){ console.log(`\n${l}`); todo[l].forEach((m, i) => console.log(`  ${i} ${m.tipo.padEnd(9)} ${m.decir}`)); } return; }
  if(arg('voces')) return listarVoces();

  const hechos = {};
  for(const p of PROVEEDORES){
    const S = SERVICIOS[p]; if(!S){ console.log(`No conozco el servicio «${p}»`); continue; }
    if(!S.configurado()){ console.log(`\n${S.nombre}: falta la clave, lo salteo.`); continue; }
    hechos[p] = true; let nuevos = 0, fallas = 0;
    console.log(`\n${S.nombre}:`);
    for(const l of IDIOMAS){
      fs.mkdirSync(path.join(SALIDA, p), {recursive:true});
      for(const [i, m] of todo[l].entries()){
        const f = path.join(SALIDA, p, `${l}-${i}.mp3`);
        if(fs.existsSync(f)) continue;
        try{ fs.writeFileSync(f, await S.generar(m.decir, l, await vozDe(p, l))); nuevos++; process.stdout.write('.'); }
        catch(e){ fallas++; console.log(`\n  ${l}-${i} «${m.decir}»: ${e.message}`); if(fallas > 3){ console.log('  Demasiados errores, paro este servicio.'); break; } }
      }
      if(fallas > 3) break;
    }
    console.log(`\n  ${nuevos} audios nuevos${fallas ? `, ${fallas} con error` : ''}`);
  }
  fs.mkdirSync(SALIDA, {recursive:true});
  fs.writeFileSync(path.join(SALIDA, 'index.html'), pagina(todo, hechos));
  console.log(`\nListo: abrí ${path.join(SALIDA, 'index.html')}`);
})().catch(e => { console.error(e.message); process.exit(1); });
