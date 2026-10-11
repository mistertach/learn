# CLAUDE.md

Children's language-learning game for a 5-year-old who can't read. The game is plain static HTML/JS: no framework, no build, no dependencies. Open `index.html` directly to run it. Optional accounts run on Vercel functions (`api/`, Node, CommonJS) with a Postgres database (Neon in production); see the README.

## Ground rules
- The child can't read, so **everything must be spoken**. Any new on-screen text the child needs gets narrated with `sayAll([...])` in the target language. On-screen text is a support for the grown-up, not the main channel.
- The narrator speaks **only the target language**. No English and no mixing.
- **All child-facing strings live in `idiomas/<lang>.js` (`T.*`) or in `capitulos/<place>/<lang>.js`.** Never hard-code a phrase in `juego.js`. If you add a string, add it to every language file.
- The grown-up corner (`openParent()` in `juego.js`) is for the parent and is written in Rioplatense Spanish, without translation.
- Spanish is Rioplatense (vos, "tenés", "valija", "pasaje", "remera", "acá").
- Buttons stay disabled while the narrator talks. Wrap narration in `narrar(async () => ...)` inside modals.
- English is never spoken. `capitulos/<place>/en.js` (same shape as the text files) and `idiomas/en.js` hold English translations that a grown-up sees when tapping a phrase (`data-en`). Add English for every new string.
- Words need `silabas` (pronounced one by one, slowly) and phrases need `partes` (built up cumulatively). Syllables must be spelled so the target-language voice pronounces them correctly. A syllable that is a lone vowel gets read as a letter name ("é accent aigu"), and one that is also an English word ("to") gets read in English, so each `idiomas/<lang>.js` has a `sonido` map that tells the voice how to say it. `voiceFor` avoids Edge's "Multilingual" voices, which guess the language of each utterance.
- Child-proof: big targets, arrow keys + mouse/touch, nothing destructive without the grown-up corner, ✕ buttons excluded from arrow navigation (`tabindex="-1"`).

## Architecture (juego.js)
- `registrarIdioma`, `registrarCapitulo`, `registrarTextos` are called by the data files. `buildCap(id, lang)` merges `base.js` + `<lang>.js` into the chapter object the engine uses.
- `T` is a proxy onto the current language pack's `t` object. `setLang(code)` rebuilds `CAP_LIST`.
- Voices: `voiceFor(code)` always picks a voice of that language and `speak()` waits for voices to load. Otherwise the browser falls back to English and mispronounces syllables.
- Save: `save` in localStorage key `aventuras-nico.v3`. Per-language chapter progress lives under `save.caps["<lang>:<place>"]`. Fish (`puntos`) and clothes (`armario`) are shared across languages.
- Rendering: canvas for the world/stories/flight (`drawWorld`, `drawScene`, `drawFlight`). `drawAnimal` draws all characters, and `drawHero` adds the outfit from the shop.
- Map legend and story-scene actor schema are documented at the top of `capitulos/aeropuerto/base.js`, with the extras (car/table tiles, restaurant backgrounds, `uniforme`, tip ending) at the top of `capitulos/restaurante/base.js`.

## Accounts (api/, servidor/, the NUBE section of juego.js)
- The game must keep working with no server (file:// or static hosting): `nubeInit()` turns online mode on only when `/api/sesion` answers JSON.
- Account screens, the admin page and server error messages are for grown-ups, in Rioplatense Spanish. Child-facing lines (`T.cuentaDi`, `T.quienJuega`, `T.capCerrado`) live in the language files like everything else.
- `persist()` also uploads the child's `save` (debounced, plus `sendBeacon` on page hide). Tables are created by `servidor/db.js` on first use; change the schema there with `IF NOT EXISTS`/`ALTER ... IF NOT EXISTS` so existing databases upgrade themselves.
- Local check: `npm install`, a Postgres in `.env`, `npm run dev`.

## Checking changes
- `node scripts/check.js` (runs `node --check` on every .js file).
- Load `index.html` in a browser and play through: language → name → character → place intro → a station → fish → shop.
