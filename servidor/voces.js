/* Voces generadas: ElevenLabs y Google (Chirp 3 HD). Lo usan api/voces.js (en Vercel) y scripts/voces-prueba.js (en tu compu).
   Variables: ELEVENLABS_API_KEY, GOOGLE_TTS_API_KEY (y opcionales ELEVENLABS_MODELO, ELEVENLABS_VOZ[_ES…], GOOGLE_VOZ_ES…). */
const IDIOMAS = ['es', 'fr', 'it', 'en', 'ar'];
// Google no tiene castellano rioplatense en Chirp 3 HD: el más cercano es el latinoamericano (es-US)
const GOOGLE_LOCAL = {es:'es-US', fr:'fr-FR', it:'it-IT', en:'en-US', ar:'ar-XA'};

const ELEVEN = 'https://api.elevenlabs.io/v1', GOOGLE = 'https://texttospeech.googleapis.com/v1';

async function ok(r){
  if(r.ok) return r;
  let t = ''; try{ t = (await r.text()).slice(0, 300); }catch(e){}
  throw Object.assign(new Error(`${r.status} ${t}`), {servicio:true});
}
const clave = n => process.env[n] || '';

const SERVICIOS = {
  eleven: {
    nombre: 'ElevenLabs',
    configurado: () => !!clave('ELEVENLABS_API_KEY'),
    // las voces de tu cuenta (para sumar más: Voice Library → Add to my voices)
    async voces(){
      const j = await (await ok(await fetch(ELEVEN+'/voices', {headers:{'xi-api-key':clave('ELEVENLABS_API_KEY')}}))).json();
      return (j.voices||[]).map(v => ({id:v.voice_id, nombre:[v.name, ...Object.values(v.labels||{})].join(' · ')}));
    },
    vozPorDefecto: lang => clave('ELEVENLABS_VOZ_'+lang.toUpperCase()) || clave('ELEVENLABS_VOZ'),
    async generar(texto, lang, voz){
      const r = await ok(await fetch(`${ELEVEN}/text-to-speech/${encodeURIComponent(voz)}?output_format=mp3_44100_128`, {
        method:'POST', headers:{'xi-api-key':clave('ELEVENLABS_API_KEY'), 'Content-Type':'application/json'},
        body:JSON.stringify({text:texto, model_id:clave('ELEVENLABS_MODELO') || 'eleven_multilingual_v2', voice_settings:{stability:0.6, similarity_boost:0.8}})
      }));
      return Buffer.from(await r.arrayBuffer());
    }
  },
  google: {
    nombre: 'Google',
    configurado: () => !!clave('GOOGLE_TTS_API_KEY'),
    async voces(lang){
      const j = await (await ok(await fetch(`${GOOGLE}/voices?languageCode=${GOOGLE_LOCAL[lang]}&key=${encodeURIComponent(clave('GOOGLE_TTS_API_KEY'))}`))).json();
      return (j.voices||[]).filter(v => /Chirp3-HD/.test(v.name)).map(v => ({id:v.name, nombre:`${v.name.split('-').pop()} (${v.ssmlGender==='FEMALE'?'F':'M'})`}));
    },
    vozPorDefecto: lang => clave('GOOGLE_VOZ_'+lang.toUpperCase()) || `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Aoede`,
    async generar(texto, lang, voz){
      const r = await ok(await fetch(`${GOOGLE}/text:synthesize?key=${encodeURIComponent(clave('GOOGLE_TTS_API_KEY'))}`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({input:{text:texto}, voice:{languageCode:GOOGLE_LOCAL[lang], name:voz}, audioConfig:{audioEncoding:'MP3'}})
      }));
      return Buffer.from((await r.json()).audioContent, 'base64');
    }
  }
};

// sin voz elegida en ElevenLabs, la primera de la cuenta
async function vozDe(servicio, lang, voz){
  const S = SERVICIOS[servicio];
  if(voz) return voz;
  const v = S.vozPorDefecto(lang); if(v) return v;
  const lista = await S.voces(lang);
  if(!lista.length) throw Object.assign(new Error(`${S.nombre}: la cuenta no tiene voces`), {servicio:true});
  return lista[0].id;
}

module.exports = { IDIOMAS, GOOGLE_LOCAL, SERVICIOS, vozDe };
