# Las aventuras de…

A talking language game for young children who can't read yet. The child picks a language (Rioplatense Spanish, French or Italian), types their name, picks an animal friend and walks around a place (week 1: an airport; week 2: a restaurant where the child becomes the waiter). They learn words syllable by syllable and phrases piece by piece, collect passport stamps, answer questions to catch fish, spend the fish on clothes in the shop, and finish the place (fly away, or get a tip in fish).

Everything is plain static files. There is no build step and no server code.

## Run it

Open `index.html` in Microsoft Edge or Chrome. Edge is best because it ships voices for all three languages.

To host it, upload the folder to any static web server.

## Structure

```
index.html              page shell + all CSS
juego.js                the engine (screens, map, movement, narration, fish, shop, stories, grown-up corner)
capitulos.js            the index: which languages and which places are enabled
tienda.js               shop catalogue (items, slot, style, colours, price in fish)
idiomas/<lang>.js       everything the narrator says and every button label, per language
idiomas/en.js           English translations of the engine lines (shown to grown-ups only, never spoken)
capitulos/<place>/
  base.js               map, drawings (inline SVG), characters, story scenes, quiz answers — same for every language
  es.js / fr.js / it.js texts for that place in each language (words + syllables, phrases + parts, stories, quiz questions)
  en.js                 English translation, same shape as the text files (no syllables/parts); matched by position
```

## Adding things

- **A new place (week):** create `capitulos/<id>/base.js` plus one text file per language and an `en.js`, following `capitulos/aeropuerto/`. Then add the id to `CAPITULOS` in `capitulos.js`.
- **A new language:** create `idiomas/<code>.js` (copy `idiomas/fr.js`), add a `<code>.js` text file to every place, then add the code to `IDIOMAS`.
- **A new shop item:** add it to `tienda.js` and add its name to the `ropa` block of every `idiomas/*.js`.

## Notes

- Progress lives in the browser's `localStorage` (key `aventuras-nico.v3`). Parent voice recordings live in IndexedDB (`aventuras-nico-audio`), keyed `<lang>:<place>:<item>` (a single syllable is `<word id>:s<n>`). Syllables can be recorded one by one: the computer voice says some lone syllables badly (a Spanish "ro" on its own gets a rolled r).
- Tapping a phrase (speech bubble, syllable chips, story text, titles) shows its English translation in a small card. It can be turned off in the grown-up corner. If a language's text means something different from `en.js` (the Spanish alfajor vs. the French biscuit), that file overrides it with `ingles: {"text": "english"}`.
- The grown-up corner opens by pressing and holding the gear for 1.5 seconds. A short tap only shows a hint.
