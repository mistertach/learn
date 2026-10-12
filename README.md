# Las aventuras de…

A talking language game for young children who can't read yet. The child picks a language (Rioplatense Spanish, French, Italian or English), types their name, picks an animal friend and walks around a place (week 1: an airport; week 2: a restaurant where the child becomes the waiter; week 3: a clock tower that teaches telling the time; week 4: our house, with the family and greetings; week 5: a market, with fruit, vegetables and counting; week 6: a playground, with action verbs and Simon says; week 7: the doctor, where the child is the doctor and learns body parts and feelings; week 8: a farm, with animals, their sounds and adjectives; week 9: school, with classroom things, shapes, the days of the week and asking "can I…?"; week 10: a birthday party with friends from every place, ages, months and the birthday song). They learn words syllable by syllable and phrases piece by piece, collect passport stamps, answer questions to catch fish, spend the fish on clothes in the shop, and finish the place (fly away, or get a tip in fish).

The game itself is plain static files with no build step. It works on its own (open `index.html`), and when it is hosted with the small API in `api/` it also has accounts: progress saved online, shared voice recordings and an admin page.

## Run it

**Without accounts:** open `index.html` in Microsoft Edge or Chrome. Edge is best because it ships voices for all four languages. Everything is saved in that browser only.

**With accounts, on your computer:** you need Node 20+ and a Postgres database (a free Neon database works).

```
npm install
cp .env.example .env     # fill in DATABASE_URL, SESSION_SECRET and ADMIN_EMAIL
npm run dev              # http://localhost:3000  ·  admin: http://localhost:3000/admin.html
```

The tables are created automatically on the first request.

## Put it online (Vercel + Neon)

1. In [Neon](https://neon.tech), create a project and copy its connection string.
2. In [Vercel](https://vercel.com), import this GitHub repository. Framework preset: **Other**, with no build command and the root as the output directory.
3. In Vercel → Settings → Environment Variables, add:
   - `DATABASE_URL`: the Neon connection string.
   - `SESSION_SECRET`: a long random string (`node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`).
   - `ADMIN_EMAIL`: your email. Whoever registers with it is the admin.
   - Optional, for "Forgot your password?" emails: `RESEND_API_KEY` (from [Resend](https://resend.com)), `MAIL_FROM` (a sender on a domain you verified in Resend, e.g. `Las aventuras <hola@yourdomain.com>`) and `APP_URL` (the site's address, e.g. `https://yourgame.vercel.app`, used in the link). Without them, the game tells the grown-up to ask you for a new password. On your computer, the link is printed in the terminal instead.
4. Deploy, open the site and create your account with that email. `/admin.html` lists every family and child and shows their progress. It lets you lock or unlock places per child, tick **Abrir todo** to open every place and game (free) for a child (handy for testing), and give anyone who forgot their password a temporary one with **Nueva contraseña**. Grown-ups can change their own password in the grown-up corner.

## Structure

```
index.html              page shell + all CSS
juego.js                the engine (screens, map, movement, narration, fish, shop, stories, grown-up corner)
capitulos.js            the index: which languages and which places are enabled
tienda.js               shop catalogue (items, slot, style, colours, price in fish)
idiomas/<lang>.js       everything the narrator says and every button label, per language
api/                    Vercel functions: sesion (sign up / sign in / password reset), alumnos (children + progress), grabaciones (voice recordings), admin
servidor/               code shared by api/: database (Neon in production, any Postgres locally), sessions, passwords, email (correo.js)
admin.html, admin.js    the admin page
scripts/dev.js          local server that serves the game and api/ like Vercel does
capitulos/<place>/
  base.js               map, drawings (inline SVG), characters, story scenes, quiz answers — same for every language
  es.js / fr.js / it.js texts for that place in each language (words + syllables, phrases + parts, stories, quiz questions)
  en.js                 the English texts; they are also the translation grown-ups see in the other languages (matched by position)
```

## Adding things

- **A new place (week):** create `capitulos/<id>/base.js` plus one text file per language (including `en.js`), following `capitulos/aeropuerto/`. Then add the id to `CAPITULOS` in `capitulos.js`.
- **A new language:** create `idiomas/<code>.js` (copy `idiomas/fr.js`), add a `<code>.js` text file to every place, then add the code to `IDIOMAS`.
- **A new shop item:** add it to `tienda.js` and add its name to the `ropa` block of every `idiomas/*.js`.

## Notes

- **Accounts:** one grown-up per family signs up with email and password, then adds children (just a name). Each child's progress (the whole `save` object) is stored in the `alumnos` table and cached in `localStorage`; if the connection drops, the newer copy wins on the next load. The admin can lock places per child. Recordings made by the admin are heard by everyone; a family's recordings are only for that family. Without a server (or with "Jugar sin cuenta"), the game works as before.
- Progress lives in the browser's `localStorage` (key `aventuras-nico.v3`, or `aventuras-nico.v3:alumno:<id>` for a child of an account). Parent voice recordings live in IndexedDB (`aventuras-nico-audio`), keyed `<lang>:<place>:<item>` (a single syllable is `<word id>:s<n>`). Syllables can be recorded one by one: the computer voice says some lone syllables badly (a Spanish "ro" on its own gets a rolled r).
- Tapping a phrase (speech bubble, syllable chips, story text, titles) shows its English translation in a small card. It can be turned off in the grown-up corner. If a language's text means something different from `en.js` (the Spanish alfajor vs. the French biscuit), that file overrides it with `ingles: {"text": "english"}`.
- The grown-up corner opens by pressing and holding the gear for 1.5 seconds. A short tap only shows a hint.
