'use strict';
/* Panel del administrador (admin.html). Para los grandes: todo en castellano. */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const TITULOS = {}, ORDEN = {};
window.registrarCapitulo = c => { ORDEN[c.id] = c.orden.length; };
window.registrarTextos = (id, lang, t) => { if(lang === 'es') TITULOS[id] = t.titulo; };
window.registrarIdioma = () => {};
const IDIOMA = {es:'Castellano', fr:'Francés', it:'Italiano'};

function cargar(src){ return new Promise(r => { const s = document.createElement('script'); s.src = src; s.onload = s.onerror = r; document.head.appendChild(s); }); }
async function api(ruta, opts = {}){
  const r = await fetch('/api/' + ruta, {method: opts.method || 'GET', credentials: 'same-origin', headers: opts.body ? {'Content-Type': 'application/json'} : {}, body: opts.body ? JSON.stringify(opts.body) : undefined});
  let j = null; try{ j = await r.json(); }catch(e){}
  if(!r.ok || !j) throw Object.assign(new Error((j && j.error) || 'Sin conexión con el servidor'), {status: r.status});
  return j;
}
const fecha = d => d ? new Date(d).toLocaleString('es-AR', {dateStyle: 'short', timeStyle: 'short'}) : '';

/* "aeropuerto: 5/7 sellos ✓" por idioma */
function progreso(datos){
  const caps = (datos && datos.caps) || {}, filas = [];
  for(const k in caps){
    const [lang, id] = k.split(':'), c = caps[k], n = Object.values(c.sellos || {}).filter(Boolean).length;
    if(!n && !c.final) continue;
    filas.push(`<div>${esc(TITULOS[id] || id)} <span>(${esc(IDIOMA[lang] || lang)})</span>: <b>${n}/${ORDEN[id] || '?'}</b> sellos${c.final ? ' <span class="ok">✓ terminado</span>' : ''}</div>`);
  }
  const peces = (datos && datos.puntos) || 0;
  return (filas.join('') || '<span class="vacio">Todavía no jugó</span>') + `<div>Pececitos: <b>${peces}</b></div>`;
}

let DATOS = null;
function render(filtro = ''){
  const caps = window.CAPITULOS || [], f = filtro.trim().toLowerCase();
  const familias = DATOS.usuarios.filter(u => !f || u.email.includes(f) || (u.nombre || '').toLowerCase().includes(f) || u.alumnos.some(a => a.nombre.toLowerCase().includes(f)));
  $('#lista').innerHTML = familias.map(u => `
    <section class="familia">
      <h2>${esc(u.nombre || u.email)}${u.es_admin ? ' · administrador' : ''}</h2>
      <div class="mail">${esc(u.email)} · se registró el ${esc(fecha(u.creado))}</div>
      ${u.alumnos.length ? `<table><thead><tr><th>Chico</th><th>Progreso</th><th>Lugares abiertos</th></tr></thead><tbody>
        ${u.alumnos.map(a => `<tr>
          <td><b>${esc(a.nombre)}</b><div class="prog">Jugó por última vez: ${esc(fecha(a.actualizado))}</div></td>
          <td class="prog">${progreso(a.datos)}</td>
          <td>${caps.map(id => `<label class="cap"><input type="checkbox" data-a="${a.id}" data-c="${esc(id)}" ${(a.bloqueados || []).includes(id) ? '' : 'checked'}> ${esc(TITULOS[id] || id)}</label>`).join('')}<span class="ok" data-ok="${a.id}" hidden>Guardado</span></td>
        </tr>`).join('')}
      </tbody></table>` : '<p class="vacio">Todavía no agregó chicos.</p>'}
    </section>`).join('') || '<p class="vacio">No hay nada que coincida.</p>';
}

async function guardar(alumnoId){
  const bloqueados = [...document.querySelectorAll(`input[data-a="${alumnoId}"]`)].filter(i => !i.checked).map(i => i.dataset.c);
  await api(`admin?alumno=${alumnoId}`, {method: 'PUT', body: {bloqueados}});
  for(const u of DATOS.usuarios) for(const a of u.alumnos) if(a.id === alumnoId) a.bloqueados = bloqueados;
  const ok = document.querySelector(`[data-ok="${alumnoId}"]`); if(ok){ ok.hidden = false; setTimeout(() => ok.hidden = true, 1500); }
}

(async () => {
  await Promise.all((window.CAPITULOS || []).flatMap(id => [cargar(`capitulos/${id}/base.js`), cargar(`capitulos/${id}/es.js`)]));
  try{ DATOS = await api('admin'); }
  catch(e){
    $('#app').innerHTML = `<div class="aviso">${e.status === 401 ? 'Primero entrá al <a href="./">juego</a> con tu cuenta de administrador (la del email que pusiste en ADMIN_EMAIL), y después volvé a esta página.'
      : e.status === 403 ? 'Esta cuenta no es la del administrador.' : esc(e.message)}</div>`;
    return;
  }
  const n = DATOS.usuarios.reduce((t, u) => t + u.alumnos.length, 0);
  $('#app').innerHTML = `<p>${DATOS.usuarios.length} familia(s) · ${n} chico(s)</p><input type="search" id="buscar" placeholder="Buscar por email o nombre"><div id="lista"></div>`;
  render();
  $('#buscar').addEventListener('input', e => render(e.target.value));
  $('#lista').addEventListener('change', async e => {
    const i = e.target.closest('input[data-a]'); if(!i) return;
    try{ await guardar(+i.dataset.a); }catch(err){ i.checked = !i.checked; alert('No se pudo guardar: ' + err.message); }
  });
})();
