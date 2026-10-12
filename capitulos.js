/* El archivo que une todo.
   IDIOMAS: los idiomas que se pueden aprender (cada uno tiene idiomas/<código>.js).
   CAPITULOS: los lugares, en orden. Cada lugar es una carpeta capitulos/<id>/ con:
     base.js  → mapa, dibujos, personajes, escenas (igual para todos los idiomas)
     es.js, fr.js, it.js → los textos en cada idioma
   Para agregar un lugar: creá la carpeta con esos archivos y sumá su id acá.
   Si a un lugar le falta el archivo de un idioma, en ese idioma no aparece. */
window.IDIOMAS = ['es', 'fr', 'it', 'en'];
window.CAPITULOS = ['aeropuerto', 'restaurante', 'reloj', 'casa', 'feria', 'plaza', 'doctor', 'granja', 'escuela', 'fiesta'];
window.PROXIMOS = [];   // semanas que se muestran como "¡Pronto!"
