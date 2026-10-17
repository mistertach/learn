/* Textos del rincón de los grandes (engranaje), en los idiomas de los grandes: en, es, fr, it.
   Se suman a window.GRANDES (idiomas/grandes.js) y siguen el idioma que se elige con las banderas del rincón.
   No son para los chicos y no se dicen en voz alta. */
(()=>{
const R = {
  en: {
    rc_titulo: "Grown-ups' corner", rc_cerrar: "Close", rc_puerta: "For grown-ups only",
    rc_sec_chico: "Child and languages", rc_sec_sonido: "Voice and play", rc_sec_cuenta: "Account", rc_sec_aparato: "This device", rc_sec_cero: "Start over",
    rc_nombre: "Name", rc_aprende: "Language being learned", rc_ayuda: "Helper language", rc_sinAyuda: "No helper",
    rc_ayudaNota: a => `After every line the narrator says it in ${a}, then translates it into this language (except syllables, which are repeated as they are).`,
    rc_ingles: "English translation: tapping a phrase (the bubble, the syllables, the story) shows it in English. It is only read, the narrator doesn't say it.",
    rc_personaje: "Choose another character", rc_regalo: "Give 5 fish", rc_tiene: n => `Has ${n}.`,
    rc_voz: n => `Voice (${n})`, rc_auto: "Automatic", rc_pausa: "Time to repeat", rc_corto: "Short", rc_normal: "Normal", rc_largo: "Long", rc_probar: "Test the voice",
    rc_sinVoz: n => `This browser has no ${n} voice, so the pronunciation will come out wrong (with an English accent). Open the game in Microsoft Edge, which has voices for all these languages.`,
    rc_escucha: "Listen to the child: the microphone only measures whether they speak out loud before the star is tapped (nothing is recorded or sent). If they say nothing, the narrator asks once.",
    rc_escNota: "The microphone could not be used. Check the browser permission.",
    rc_grown: "I control when they speak: the star is held down for a second to give the stamp.",
    rc_todo: "Open all places (otherwise each place opens when the one before is finished).",
    rc_offline: "Play offline", rc_offlineTxt: (a, b) => `Downloads the audio of ${a}${b ? ` and ${b}` : ''} to this device (about 30 MB per language). The game must be installed or opened from its web address.`, rc_offlineBtn: "Download the audio",
    rc_tour: "App tour", rc_tourTxt: "A quick walk through everything the game offers and how to use it.", rc_tourBtn: "Start the tour",
    rc_cero: "Start over", rc_ceroTxt: "Erases the name, character, stamps, open stories, fish and clothes. The voice settings are kept.",
    rc_confirma: "Tap again to confirm",
    rc_dl_no: "This browser can't store them", rc_dl_bajando: p => `Downloading… ${p}%`, rc_dl_listo: "Done: it now works offline", rc_dl_fallo: "Could not download",
    rc_dia: "today", rc_sinNombre: "this child"
  },
  es: {
    rc_titulo: "Rincón de los grandes", rc_cerrar: "Cerrar", rc_puerta: "Solo para grandes",
    rc_sec_chico: "El chico y los idiomas", rc_sec_sonido: "Voz y juego", rc_sec_cuenta: "Cuenta", rc_sec_aparato: "Este aparato", rc_sec_cero: "Empezar de cero",
    rc_nombre: "Nombre", rc_aprende: "Idioma que aprende", rc_ayuda: "Idioma de ayuda", rc_sinAyuda: "Sin ayuda",
    rc_ayudaNota: a => `Después de cada frase el relator la dice en ${a} y enseguida la traduce a este idioma (menos las sílabas, que se repiten tal cual).`,
    rc_ingles: "Traducción al inglés: al tocar una frase (el globo, las sílabas, el cuento) aparece en inglés. Solo se lee, el relator no la dice.",
    rc_personaje: "Elegir otro personaje", rc_regalo: "Regalar 5 pececitos", rc_tiene: n => `Tiene ${n}.`,
    rc_voz: n => `Voz (${n})`, rc_auto: "Automática", rc_pausa: "Tiempo para repetir", rc_corto: "Corto", rc_normal: "Normal", rc_largo: "Largo", rc_probar: "Probar la voz",
    rc_sinVoz: n => `Este navegador no tiene ninguna voz en ${n}, así que la pronunciación va a salir mal (con acento inglés). Abrí el juego en Microsoft Edge, que trae voces de todos estos idiomas.`,
    rc_escucha: "Escuchar al chico: el micrófono solo mide si habla en voz alta antes de dar la estrella (no graba ni envía nada). Si no dice nada, el relator se lo pide una vez.",
    rc_escNota: "No se pudo usar el micrófono. Revisá el permiso del navegador.",
    rc_grown: "Yo controlo cuando habla: la estrella se mantiene apretada un segundo para dar el sello.",
    rc_todo: "Abrir todos los lugares (si no, cada lugar se abre al terminar el anterior).",
    rc_offline: "Jugar sin internet", rc_offlineTxt: (a, b) => `Baja a este aparato el audio de ${a}${b ? ` y de ${b}` : ''} (unos 30 MB por idioma). Hace falta que el juego esté instalado o abierto desde su dirección web.`, rc_offlineBtn: "Descargar el audio",
    rc_tour: "Recorrido de la app", rc_tourTxt: "Una vuelta rápida por todo lo que ofrece el juego y cómo se usa.", rc_tourBtn: "Ver recorrido",
    rc_cero: "Empezar de cero", rc_ceroTxt: "Borra el nombre, el personaje, los sellos, los cuentos abiertos, los pececitos y la ropa. Se guardan los ajustes de voz.",
    rc_confirma: "Tocá otra vez para confirmar",
    rc_dl_no: "Este navegador no puede guardarlos", rc_dl_bajando: p => `Descargando… ${p}%`, rc_dl_listo: "Listo: ya funciona sin internet", rc_dl_fallo: "No se pudo descargar",
    rc_dia: "hoy", rc_sinNombre: "este chico"
  },
  fr: {
    rc_titulo: "Coin des grands", rc_cerrar: "Fermer", rc_puerta: "Réservé aux grands",
    rc_sec_chico: "L'enfant et les langues", rc_sec_sonido: "Voix et jeu", rc_sec_cuenta: "Compte", rc_sec_aparato: "Cet appareil", rc_sec_cero: "Tout recommencer",
    rc_nombre: "Prénom", rc_aprende: "Langue apprise", rc_ayuda: "Langue d'aide", rc_sinAyuda: "Sans aide",
    rc_ayudaNota: a => `Après chaque phrase, le narrateur la dit en ${a} puis la traduit dans cette langue (sauf les syllabes, qui sont répétées telles quelles).`,
    rc_ingles: "Traduction en anglais : en touchant une phrase (la bulle, les syllabes, l'histoire), elle apparaît en anglais. Elle est seulement lue, le narrateur ne la dit pas.",
    rc_personaje: "Choisir un autre personnage", rc_regalo: "Offrir 5 petits poissons", rc_tiene: n => `Il en a ${n}.`,
    rc_voz: n => `Voix (${n})`, rc_auto: "Automatique", rc_pausa: "Temps pour répéter", rc_corto: "Court", rc_normal: "Normal", rc_largo: "Long", rc_probar: "Tester la voix",
    rc_sinVoz: n => `Ce navigateur n'a aucune voix pour cette langue (${n}) : la prononciation sera mauvaise (avec un accent anglais). Ouvrez le jeu dans Microsoft Edge, qui propose des voix pour toutes ces langues.`,
    rc_escucha: "Écouter l'enfant : le micro mesure seulement s'il parle à voix haute avant de toucher l'étoile (rien n'est enregistré ni envoyé). S'il ne dit rien, le narrateur le lui demande une fois.",
    rc_escNota: "Impossible d'utiliser le micro. Vérifiez l'autorisation du navigateur.",
    rc_grown: "Je contrôle quand il parle : l'étoile doit rester appuyée une seconde pour donner le tampon.",
    rc_todo: "Ouvrir tous les lieux (sinon chaque lieu s'ouvre quand le précédent est terminé).",
    rc_offline: "Jouer sans internet", rc_offlineTxt: (a, b) => `Télécharge sur cet appareil l'audio de ${a}${b ? ` et de ${b}` : ''} (environ 30 Mo par langue). Le jeu doit être installé ou ouvert depuis son adresse web.`, rc_offlineBtn: "Télécharger l'audio",
    rc_tour: "Visite de l'appli", rc_tourTxt: "Un tour rapide de tout ce que propose le jeu et de la façon de l'utiliser.", rc_tourBtn: "Voir la visite",
    rc_cero: "Tout recommencer", rc_ceroTxt: "Efface le prénom, le personnage, les tampons, les histoires ouvertes, les poissons et les vêtements. Les réglages de voix sont conservés.",
    rc_confirma: "Touchez encore pour confirmer",
    rc_dl_no: "Ce navigateur ne peut pas les stocker", rc_dl_bajando: p => `Téléchargement… ${p} %`, rc_dl_listo: "Terminé : ça marche sans internet", rc_dl_fallo: "Échec du téléchargement",
    rc_dia: "aujourd'hui", rc_sinNombre: "cet enfant"
  },
  it: {
    rc_titulo: "Angolo dei grandi", rc_cerrar: "Chiudi", rc_puerta: "Solo per i grandi",
    rc_sec_chico: "Il bambino e le lingue", rc_sec_sonido: "Voce e gioco", rc_sec_cuenta: "Account", rc_sec_aparato: "Questo dispositivo", rc_sec_cero: "Ricomincia da zero",
    rc_nombre: "Nome", rc_aprende: "Lingua che impara", rc_ayuda: "Lingua di aiuto", rc_sinAyuda: "Senza aiuto",
    rc_ayudaNota: a => `Dopo ogni frase il narratore la dice in ${a} e poi la traduce in questa lingua (tranne le sillabe, che si ripetono così come sono).`,
    rc_ingles: "Traduzione in inglese: toccando una frase (il fumetto, le sillabe, la storia) compare in inglese. Si legge soltanto, il narratore non la dice.",
    rc_personaje: "Scegli un altro personaggio", rc_regalo: "Regala 5 pesciolini", rc_tiene: n => `Ne ha ${n}.`,
    rc_voz: n => `Voce (${n})`, rc_auto: "Automatica", rc_pausa: "Tempo per ripetere", rc_corto: "Breve", rc_normal: "Normale", rc_largo: "Lungo", rc_probar: "Prova la voce",
    rc_sinVoz: n => `Questo browser non ha nessuna voce per questa lingua (${n}), quindi la pronuncia verrà male (con accento inglese). Apri il gioco in Microsoft Edge, che ha le voci di tutte queste lingue.`,
    rc_escucha: "Ascoltare il bambino: il microfono misura solo se parla ad alta voce prima di toccare la stella (non registra né invia nulla). Se non dice niente, il narratore glielo chiede una volta.",
    rc_escNota: "Non è stato possibile usare il microfono. Controlla il permesso del browser.",
    rc_grown: "Controllo io quando parla: la stella va tenuta premuta per un secondo per dare il timbro.",
    rc_todo: "Apri tutti i luoghi (altrimenti ogni luogo si apre quando finisce il precedente).",
    rc_offline: "Giocare senza internet", rc_offlineTxt: (a, b) => `Scarica su questo dispositivo l'audio di ${a}${b ? ` e di ${b}` : ''} (circa 30 MB per lingua). Il gioco deve essere installato o aperto dal suo indirizzo web.`, rc_offlineBtn: "Scarica l'audio",
    rc_tour: "Giro dell'app", rc_tourTxt: "Un giro veloce di tutto quello che offre il gioco e di come si usa.", rc_tourBtn: "Guarda il giro",
    rc_cero: "Ricomincia da zero", rc_ceroTxt: "Cancella il nome, il personaggio, i timbri, le storie aperte, i pesciolini e i vestiti. Le impostazioni della voce restano.",
    rc_confirma: "Tocca ancora per confermare",
    rc_dl_no: "Questo browser non può salvarli", rc_dl_bajando: p => `Download… ${p}%`, rc_dl_listo: "Fatto: ora funziona senza internet", rc_dl_fallo: "Download non riuscito",
    rc_dia: "oggi", rc_sinNombre: "questo bambino"
  }
};
for (const l in R) window.GRANDES[l] = Object.assign(window.GRANDES[l] || {}, R[l]);
})();
