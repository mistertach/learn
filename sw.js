/* Service worker: deja instalar el juego y seguir jugando sin internet.
   · el juego (html, js, textos): primero la red, y si no hay, lo último guardado (así las actualizaciones llegan solas);
   · los audios (/audio/*.mp3): primero lo guardado, y si no está, la red y se guarda (cada audio se baja una sola vez);
   · /api/ y otros sitios: no se tocan.
   AUDIO_VERSION: subila cada vez que se vuelven a grabar audios con el mismo nombre (si no, los aparatos siguen con los viejos). */
const AUDIO_VERSION = 'v3', JUEGO = 'juego-v1', AUDIO = 'audio-' + AUDIO_VERSION;
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if ((k.startsWith('audio-') && k !== AUDIO) || (k.startsWith('juego-') && k !== JUEGO)) await caches.delete(k);
    await self.clients.claim();
  })());
});
async function rango(req, resp) {   // los navegadores piden los audios "por pedacitos" (Range): se contesta desde lo guardado
  const m = /bytes=(\d+)-(\d+)?/.exec(req.headers.get('range') || ''); if (!m) return resp;
  const buf = await resp.arrayBuffer(), ini = +m[1], fin = m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(ini, fin + 1), { status: 206, headers: { 'Content-Type': resp.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': `bytes ${ini}-${fin}/${buf.byteLength}`, 'Content-Length': String(fin - ini + 1) } });
}
self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin || u.pathname.startsWith('/api/')) return;
  if (/\/audio\/.+\.mp3$/.test(u.pathname)) {
    e.respondWith((async () => {
      const c = await caches.open(AUDIO), hit = await c.match(u.pathname);
      if (hit) return rango(req, hit);
      const r = await fetch(new Request(u.pathname));   // pedido entero (sin Range) para poder guardarlo
      if (r.ok) { c.put(u.pathname, r.clone()); return rango(req, r); }
      return r;
    })().catch(() => fetch(req)));
    return;
  }
  e.respondWith((async () => {
    const c = await caches.open(JUEGO);
    try { const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r; }
    catch (err) { const hit = await c.match(req, { ignoreSearch: true }); if (hit) return hit; if (req.mode === 'navigate') { const i = await c.match('/index.html') || await c.match('/'); if (i) return i; } throw err; }
  })());
});
