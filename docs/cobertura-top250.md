# Cobertura de las 250 palabras más frecuentes (español e inglés)

Medida con `node scripts/cobertura.js --lang=es` (y `--lang=en`; `--md` imprime estas tablas). La lista sale de subtítulos de
películas (FrequencyWords / OpenSubtitles, CC-BY-SA 4.0), limpiada a mano: `scripts/datos/top250-<idioma>.txt`.

- **ENSEÑADA**: el chico la repite (palabras y frases de los lugares, sus opciones en las charlas, el nivel 0, los juegos).
- **OÍDA**: la dice el relator o un amigo (intros, respuestas, cuentos) pero el chico no la repite.
- **FALTA**: no aparece en ningún texto.
- **NO_APTA / RELLENO**: no se enseña a un chico de 5 años (dinero, mierda, muerto…) o es una muletilla (oh, eh, hey…).
- Se cuenta por formas de la palabra con una tablita de equivalentes (voseo: *eres = sos*, *aquí = acá*, *madre = mamá*; verbos: *tienes = tenés*).
  No es un lematizador: ante la duda, el informe es más estricto que la realidad.

## Resultado actual

| | Enseñadas | Oídas | Faltan | No aptas / relleno |
|---|---|---|---|---|
| **Español, 50 primeras** | 46 (92 %) | 4 | 0 | 0 |
| **Español, 100 primeras** | 79 (79 %) | 19 | 2 | 0 |
| **Español, 250** | 157 (63 %) | 54 | 32 | 7 |
| **Inglés, 50 primeras** | 46 (92 %) | 4 | 0 | 0 |
| **Inglés, 100 primeras** | 81 (81 %) | 12 | 2 | 5 |
| **Inglés, 250** | 156 (62 %) | 52 | 29 | 13 |

Lectura: lo más frecuente (las 50 primeras) está casi todo enseñado. El hueco está entre el puesto 100 y el 250, y es de dos clases:
**palabras que se oyen pero no se repiten** (pronombres, conjunciones, verbos modales: ~54 por idioma) y **palabras que faltan del todo**
(gente, tiempo y cosas abstractas: ~30 por idioma).

## Español

- top 50: enseñadas 46, oídas 4, faltan 0, no aptas 0, relleno 0
- top 100: enseñadas 79, oídas 19, faltan 2, no aptas 0, relleno 0
- top 250: enseñadas 157, oídas 54, faltan 32, no aptas 3, relleno 4

| Estado | Palabras (en orden de frecuencia) |
|---|---|
| FALTA | he (62), nunca (98), señor (107), has (110), decir (111), dios (114), ti (118), hombre (121), vida (122), alguien (123), antes (130), ni (132), parece (144), mismo (149), nadie (151), tal (157), fuera (159), han (161), desde (162), momento (166), cosa (186), hijo (187), tipo (190), mujer (194), debe (219), realmente (220), aún (222), razón (232), alguna (233), serio (238), problema (243), cierto (245) |
| OÍDA | su (28), así (46), algo (48), bueno (50), nos (57), o (61), ella (66), fue (69), era (72), porque (76), creo (79), sabes (81), usted (86), entonces (87), verdad (90), tan (92), sus (94), tiempo (95), esa (97), siento (106), sobre (113), tenemos (116), ahí (127), estar (131), noche (136), estamos (139), acuerdo (141), podría (153), hablar (154), ellos (156), mundo (164), claro (165), les (167), había (171), tenía (173), lugar (176), seguro (179), tus (182), amigo (191), nuestro (193), luego (196), buena (202), crees (212), conmigo (214), nombre (215), mal (218), toda (224), cada (226), importa (228), contigo (229), tanto (234), idea (240), demasiado (248), entre (250) |
| NO_APTA | dinero (163), mierda (216), amor (249) |
| RELLENO | oh (101), vale (175), oye (205), eh (241) |

## Inglés

- top 50: enseñadas 46, oídas 4, faltan 0, no aptas 0, relleno 0
- top 100: enseñadas 81, oídas 12, faltan 2, no aptas 0, relleno 5
- top 250: enseñadas 156, oídas 52, faltan 29, no aptas 5, relleno 8

| Estado | Palabras (en orden de frecuencia) |
|---|---|
| FALTA | been (88), man (93), mean (118), any (125), even (127), sure (130), thing (131), life (139), maybe (148), before (150), stop (153), thought (160), those (165), guys (185), father (186), guy (187), believe (197), girl (198), kind (203), being (209), enough (214), happened (215), bad (221), might (222), understand (227), remember (229), same (232), son (243), woman (245) |
| OÍDA | he (16), she (41), right (44), at (48), her (55), think (61), as (62), his (70), were (83), then (85), or (87), could (97), something (101), way (105), never (109), because (113), should (117), off (122), these (132), into (135), anything (136), still (137), their (145), must (149), other (151), call (154), talk (157), away (158), than (159), last (166), told (169), new (170), keep (173), years (175), around (179), place (182), ever (183), nice (196), someone (199), fine (200), every (206), course (210), may (217), world (220), another (226), ask (230), own (231), show (233), talking (236), getting (239), went (246), mind (250) |
| NO_APTA | sir (141), god (143), money (178), kill (235), dead (248) |
| RELLENO | oh (51), yeah (57), okay (76), gonna (90), hey (96), uh (146), ok (207), hi (247) |

---

## Plan de remediación

### Objetivos medibles (los controla `scripts/cobertura.js`)

| Meta | Ahora (es / en) | Objetivo |
|---|---|---|
| 100 primeras palabras **enseñadas** | 79 % / 81 % | **≥ 95 %** |
| 250 palabras **enseñadas** | 63 % / 62 % | **≥ 85 %** |
| 250 palabras **enseñadas u oídas** | 85 % / 85 % | **≥ 98 %** |
| **FALTAN** (aptas) | 32 / 29 | **0** |

No hace falta que el chico "estudie" las 250: las palabras de función (*de, que, y, lo, the, of, to*) se aprenden dentro de frases. Lo que sí
conviene es que cada una aparezca en una frase que el chico repite, no solo en la narración.

Dos advertencias sobre la medida:
1. La lista viene de **subtítulos de películas**, o sea lenguaje de adultos (*dinero, matar, amor, sir, god*…). Lo que más necesita un chico de 5 años
   (colores, animales, cuerpo, comida, familia) casi no está en las 250, y en eso el juego es fuerte. Conviene medir **también** contra una lista pensada
   para niños (por ejemplo el inventario MacArthur-Bates CDI, ~680 palabras en inglés y en español): es la siguiente tarea de medición.
2. Español rioplatense: el juego usa *vos, acá, tenés, mamá*; la lista usa *tú, aquí, tienes, madre*. La tablita de equivalentes del script ya lo cuenta como cubierto.
   Lo que **no** se va a enseñar a propósito: *usted/ustedes* formales, el pretérito perfecto español (*he, has, han, hemos*), *ti*, *vale*.

### Fase 1 · "Puentes": de OÍDA a ENSEÑADA (el grueso: ~54 palabras por idioma)

Un **nivel 0, parte 2: «Frases de todos los días»**, con el mismo motor de las lecciones del nivel 0 (la guía explica, el chico repite la frase armada por partes, y
un "¿cuál dice…?" con una escena). 6 grupos × 8 frases cortas; cada frase carga 2 a 4 palabras objetivo. No necesita dibujito por palabra: una escena por grupo.

| Grupo | Palabras objetivo (español) | Ejemplos |
|---|---|---|
| 1 · Ella, ellos, nosotros | ella, ellos, nos, su, sus, tus, nuestro, conmigo, contigo, les | «Ella es mi amiga.» · «Nuestro juego es lindo.» · «Vení conmigo.» |
| 2 · Porque, entonces, luego | porque, entonces, luego, así, tan, o, sobre, entre | «Primero comemos, luego jugamos.» · «¿Por qué? ¡Porque sí!» |
| 3 · Cómo estoy | creo, crees, siento, verdad, claro, seguro, bueno, buena, mal | «Creo que sí.» · «¡Es verdad!» · «Estoy seguro.» |
| 4 · Cuándo y dónde | tiempo, noche, ahí, lugar, cada, toda, tanto, demasiado, mundo | «Cada noche duermo.» · «Ahí está el lugar.» · «Es demasiado.» |
| 5 · Qué pasó | fue, era, había, tenía, tenemos, estamos, estar, podría | «Había una vez un gato.» · «Fue un lindo día.» · «Tenemos tiempo.» |
| 6 · Hablemos | hablar, nombre, idea, importa, sabes, amigo, algo, usted* | «¿Cuál es tu nombre?» · «¡Qué buena idea!» · «Quiero decirte algo.» |

*El inglés tiene su propio juego equivalente (*he/she/her/his/their*, *or/as/than/because/then*, *could/should/must/may*, *never/still/ever/last*, *think/call/talk/ask/show/keep/told/went*).
Esfuerzo: unas 48 frases × 5 idiomas (el lint exige la misma forma en los cinco) + grabarlas. Los dibujos: 6 escenas.

### Fase 2 · Lo que FALTA, en lugares que ya existen (~30 palabras por idioma)

Se suman como `palabrasExtra` / `frasesExtra` del lugar que mejor las explica (cuestan un dibujo y una línea de texto por idioma).

| Lugar | Español | Inglés |
|---|---|---|
| **casa** (gente) | el hombre, la mujer, el hijo / la hija (el nene), el señor, la cosa | man, woman, girl, father, son, guys, thing |
| **reloj** (tiempo) | nunca, antes, un momento, ya, desde | before, maybe, stop (¡pará!), been/being (en frase) |
| **plaza** (acciones) | afuera (fuera), mismo, nadie, alguien | stop, same, enough, any |
| **doctor / escuela** (sentir y pensar) | decir, tener, parece, serio, cierto | understand, remember, believe, happened, thought, bad, sure |

Las palabras abstractas o de adultos (**razón, realmente, aún, ni, tal, debe, problema, vida, tipo / life, kind, even, might, those**) no se enseñan sueltas: se cubren
**metiéndolas en frases de las charlas y los cuentos** (Fase 3), para que al menos se oigan en contexto.

### Fase 3 · Charlas con los verbos que faltan

Revisar las 48 charlas (12 lugares × 4) y agregar a las opciones del chico los verbos y modales que pidió el informe (*decir, tener, saber, creo, ¿puedo…?, I think, I know, I don't understand,
What happened? Stop!*). Cuesta regrabar solo las líneas nuevas.

### Fase 4 · Que no se rompa de nuevo

- `npm run cobertura` (informe) y, en el CI, un aviso si baja la cobertura de las 100 primeras palabras.
- Cada vez que se agregue contenido: correr el informe y mirar qué quedó enseñada / oída.
- Repetir la medición con la lista infantil (CDI) y, si sirve, hacer lo mismo para francés, italiano y árabe (hay que armar sus listas).

### Orden y esfuerzo sugeridos

| Paso | Qué | Esfuerzo |
|---|---|---|
| 1 | Medir también contra una lista infantil (CDI) y decidir las metas finales | corto |
| 2 | Fase 2: palabras extra en casa, reloj, plaza (solo es/en primero, completar fr/it/ar) | medio |
| 3 | Fase 1: «Frases de todos los días» en es y en, luego fr/it/ar | grande |
| 4 | Fase 3: charlas con los verbos pendientes | medio |
| 5 | Fase 4: CI y revisión periódica | corto |

Decisiones para vos: (a) ¿la meta es esta lista de subtítulos o una lista infantil? (b) ¿hacemos las palabras nuevas en los 5 idiomas a la vez
(lo que pide el lint) o primero en español e inglés? (c) ¿el nivel 0, parte 2 va en el mismo botón que el nivel 0 o como un nivel nuevo en el camino?

---

## Lo que se hizo (Intro parte B)

Se midió también contra una **lista pensada para chicos** (`scripts/datos/ninos.txt`, ~410 palabras por categoría: colores, animales, cuerpo, comida, ropa, casa, juguetes, vehículos, naturaleza, sentimientos, acciones, lugares, opuestos, posiciones, tiempo, cortesía, preguntas). Al empezar solo el 51 % (es) / 53 % (en) estaba enseñado.

Se sumó la **parte B de la Intro** (la parte A son las 8 lecciones de palabras del juego): 35 grupos lindos con dibujos, que se generan desde `scripts/datos/intro-b/*.txt` (`npm run intro-b`) para los cinco idiomas a la vez:
- 6 grupos de colores y animales (más colores; casa y granja; selva; bichitos; bosque y mar), cuerpo (2), comida (2), gente, ropa (2), cosas de la casa (2), juguetes, vehículos, cielo y tiempo, naturaleza, sentimientos, acciones (3), lugares, cómo es, dónde está;
- 10 grupos de **frases de todos los días** (ella/él/nosotros, porque/entonces, creo que sí, cuándo y dónde, qué pasó, hablemos, mío/tuyo/suyo, cómo me siento, más para conversar, frases lindas).

| Medida | Antes (es / en) | Ahora (es / en) |
|---|---|---|
| Top 100 enseñadas | 79 / 81 | **96 / 92** |
| Top 250 enseñadas | 157 / 156 | **217 / 209** (87 % / 84 %) |
| Top 250 faltan (aptas) | 32 / 29 | 19 / 6 |
| Lista para chicos enseñada | 51 % / 53 % | **92 % / 89 %** |

Lo que sigue faltando son sobre todo palabras abstractas o de adultos (*dios, vida, razón, realmente*; *sir, god, life*) y las pocas de la lista infantil que no tienen un dibujo claro (tío, tía, primo, pollera, pijama, cinturón, azúcar, jamón, techo, manta…). `npm run cobertura:check` (y el CI) avisa si baja.
