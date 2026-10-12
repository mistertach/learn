# CLAUDE.md

Children's language-learning game for a 5-year-old who can't read. The game is plain static HTML/JS: no framework, no build, no dependencies. Open `index.html` directly to run it. Optional accounts run on Vercel functions (`api/`, Node, CommonJS) with a Postgres database (Neon in production); see the README.

## Ground rules
- The child can't read, so **everything must be spoken**. Any new on-screen text the child needs gets narrated with `sayAll([...])` in the target language. On-screen text is a support for the grown-up, not the main channel.
- The narrator speaks **only the target language**. No English and no mixing.
- **All child-facing strings live in `idiomas/<lang>.js` (`T.*`) or in `capitulos/<place>/<lang>.js`.** Never hard-code a phrase in `juego.js`. If you add a string, add it to every language file.
- The grown-up corner (`openParent()` in `juego.js`) is for the parent and is written in Rioplatense Spanish, without translation.
- Languages to learn: es, fr, it, en (`IDIOMAS` in `capitulos.js`).
- Spanish is Rioplatense (vos, "tenés", "valija", "pasaje", "remera", "acá").
- Buttons stay disabled while the narrator talks. Wrap narration in `narrar(async () => ...)` inside modals.
- English is one of the languages to learn (`idiomas/en.js`, `capitulos/<place>/en.js`), and those same files are the English translations a grown-up sees when tapping a phrase (`data-en`) while the child learns another language. They are matched by position, so `en.js` must keep exactly the shape of the other text files. Never speak English while the child learns another language. Add English for every new string.
- Words need `silabas` (pronounced one by one, slowly) and phrases need `partes` (built up cumulatively). Syllables must be spelled so the target-language voice pronounces them correctly. A syllable that is a lone vowel gets read as a letter name ("é accent aigu"), and some voices spell out odd ones ("loj", "je") or anything with an accent added ("tó"), so each `idiomas/<lang>.js` has a `sonido` map that tells the voice how to say it. `voiceFor` avoids Edge's "Multilingual" voices, which guess the language of each utterance.
- Child-proof: big targets, arrow keys + mouse/touch, nothing destructive without the grown-up corner, ✕ buttons excluded from arrow navigation (`tabindex="-1"`).

## Architecture (juego.js)
- `registrarIdioma`, `registrarCapitulo`, `registrarTextos` are called by the data files. `buildCap(id, lang)` merges `base.js` + `<lang>.js` into the chapter object the engine uses.
- `T` is a proxy onto the current language pack's `t` object. `setLang(code)` rebuilds `CAP_LIST`.
- Voices: `voiceFor(code)` always picks a voice of that language and `speak()` waits for voices to load. Otherwise the browser falls back to English and mispronounces syllables.
- Save: `save` in localStorage key `aventuras-nico.v3`. Per-language chapter progress lives under `save.caps["<lang>:<place>"]`. Fish (`puntos`) and clothes (`armario`) are shared across languages.
- Rendering: canvas for the world/stories/flight (`drawWorld`, `drawScene`, `drawFlight`). `drawAnimal` draws all characters, and `drawHero` adds the outfit from the shop.
- Maps: each floor has its own size and shape (a space is outside the building; walls are drawn tile by tile), kept close to square so they fit a phone either way up. Below every U, D and L there must be floor. `resizeWorld()` leaves room for the touch arrows (below the map when upright, beside it when sideways).
- Phones: under 640px wide the stamp row becomes a counter, and under 520px tall the windows shrink so their buttons always fit. Check new screens at 390×844 and 844×390.
- Map legend and story-scene actor schema are documented at the top of `capitulos/aeropuerto/base.js`, with the extras (car/table tiles, restaurant backgrounds, `uniforme`, tip ending) at the top of `capitulos/restaurante/base.js`, and the clock ones (gear tile, `contar`, `buscar`, `numeros`, bells ending, `relojSVG`) at the top of `capitulos/reloj/base.js`, and the house ones (flowers/tree/sofa/toys tiles, home backgrounds, `final.icono`, video-call ending, `cara()` portraits) at the top of `capitulos/casa/base.js`, and the market ones (fruit-crate tile, `feria` background, shopping ending, `numeros` for the basket game) at the top of `capitulos/feria/base.js`, and the playground ones (sandpit tile, `plaza` background, hero/npc action `gesto`s drawn by `drawAnimal(..., {accion})`, swing/seesaw anims, Simon-says ending with `final.ordenes`) at the top of `capitulos/plaza/base.js`, and the doctor ones (exam-bed tile, `consultorio` background, `triste` gesto, white-coat uniform, teddy-hug ending, body-part game) at the top of `capitulos/doctor/base.js`, and the farm ones (hay-bale tile, `granja` background, overalls and straw-hat uniform, animal-parade ending with `final.desfile`/`sonidos`, feeding game) at the top of `capitulos/granja/base.js`, and the school ones (desk tile, `escuela` background, days-of-the-week ending with `final.dias`, shape-train game) at the top of `capitulos/escuela/base.js`, and the party ones (balloon tile, `fiesta` background, party-hat uniform, `meses` counted at a station, birthday-song ending with every earlier place's final npc as guests, candles game) at the top of `capitulos/fiesta/base.js`. `drawReloj()` in `juego.js` draws a clock face on canvas.
- Spanish and Italian packs set `sinTilde`: `sonido()` strips the accent from a lone syllable before speaking it (some voices spell "tó" as letters).

- Places open in order: a place unlocks when the previous one is finished in the language being learned (`capPorOrden`), unless a grown-up ticks "open all places" in the grown-up corner (`save.todoAbierto`). The admin can also lock places per child (`capAbierto`).

## Microgames (microjuegos.js)
- One per place, declared in `base.js` as `microjuego: {id, arte, precio, color}` with its texts in each `<lang>.js` (and `en.js`) under `microjuego`. `MICROJUEGOS[id](cap, M)` draws on `M.canvas`, puts buttons in `M.actions` and resolves when the round ends.
- Finishing a place (in any language) unlocks its game and gives one free play (`save.juegos[id].gratis`); after that each play costs `precio` fish. They are listed under the home screen's Games button.
- Keep them teaching something in the target language (the plane game says the color of each star, the pizza game names each ingredient), with no way to lose.

## Accounts (api/, servidor/, the NUBE section of juego.js)
- The game must keep working with no server (file:// or static hosting): `nubeInit()` turns online mode on only when `/api/sesion` answers JSON.
- The account screens (sign in / create account, "who's playing", the account part of the grown-up corner) are for grown-ups in the language they pick with the flags, English by default. Their texts live in `idiomas/grandes.js` (`G.*`, en/es/fr/it); add new ones to every language there. The server sends an error `codigo` and the client shows `G.err_<codigo>`. The rest of the grown-up corner and the admin page stay in Rioplatense Spanish. Child-facing lines (`T.cuentaDi`, `T.quienJuega`, `T.capCerrado`) live in the language files like everything else.
- Passwords: "forgot your password?" emails a one-hour link (`/?clave=<token>`, only its sha256 is stored in `recuperos`) through Resend (`servidor/correo.js`, needs `RESEND_API_KEY` + `MAIL_FROM`, optional `APP_URL`; locally the link is printed in the terminal). The admin can set a temporary password (`POST /api/admin?usuario=N`), and grown-ups can change theirs in the grown-up corner. Any password change bumps `usuarios.clave_ver`, which is in the session cookie, so old sessions stop working.
- The admin's **Abrir todo** (`alumnos.todo_abierto`, `pruebaTodo()` in juego.js) opens every place and game, free, for that child, overriding order and per-child locks. It is meant for testing.
- `persist()` also uploads the child's `save` (debounced, plus `sendBeacon` on page hide). Tables are created by `servidor/db.js` on first use; change the schema there with `IF NOT EXISTS`/`ALTER ... IF NOT EXISTS` so existing databases upgrade themselves.
- Local check: `npm install`, a Postgres in `.env`, `npm run dev`.

## Checking changes
- `node scripts/check.js` (runs `node --check` on every .js file).
- Load `index.html` in a browser and play through: language → name → character → place intro → a station → fish → shop.
