/* Las frases de la prueba de voces: las mismas del juego, de tres lugares (narrador, palabra, sílabas, frase, partes,
   respuesta y cuento). La usan voces.html (en el navegador) y scripts/voces-prueba.js (en Node). */
(function(raiz){
  const LUGARES = [['primeras', 'H'], ['casa', 'R'], ['feria', 'M']];
  // en árabe cada texto es "latino|عربي": se lee el latino y la voz dice el árabe
  function caras(s, lang, nombre){
    s = String(s).replace(/\{N\}/g, nombre).replace(/\*/g, '');
    if(lang === 'ar' && s.includes('|')){ const i = s.indexOf('|'); return {ver:s.slice(0, i), decir:s.slice(i+1)}; }
    return {ver:s, decir:s};
  }
  function muestrasDe(caps, lang, nombre){
    const out = [];
    const add = (tipo, s) => { const c = caras(s, lang, nombre||'Nico'); if(c.decir.trim()) out.push({tipo, ...c}); };
    for(const [id, k] of LUGARES){
      const C = caps[id]; if(!C) continue;
      const E = C.estaciones[k];
      add('lugar', C.bienvenida);
      add('narrador', E.intro);
      add('palabra', E.palabra.texto);
      (E.palabra.silabas||[]).forEach(s => add('sílaba', s));
      add('frase', E.frase.texto);
      (E.frase.partes||[]).forEach(s => add('parte', s));
      add('respuesta', E.respuesta);
      E.cuento.paginas.slice(0, 2).forEach(s => add('cuento', s));
    }
    if(caps.casa) add('narrador', caps.casa.final.lograste);
    return out;
  }
  const api = {LUGARES: LUGARES.map(l => l[0]), muestrasDe};
  if(typeof module !== 'undefined' && module.exports) module.exports = api; else raiz.VocesMuestras = api;
})(this);
