/* El archivo que une todo.
   IDIOMAS: los idiomas que se pueden aprender (cada uno tiene idiomas/<código>.js).
   CAPITULOS: los lugares, en orden. Cada lugar es una carpeta capitulos/<id>/ con:
     base.js  → mapa, dibujos, personajes, escenas (igual para todos los idiomas)
     es.js, fr.js, it.js → los textos en cada idioma
   Para agregar un lugar: creá la carpeta con esos archivos y sumá su id acá.
   Si a un lugar le falta el archivo de un idioma, en ese idioma no aparece. */
window.IDIOMAS = ['es', 'fr', 'it', 'en', 'ar', 'ru'];
// el orden va de lo más cercano (la casa, los animales) a lo más difícil (la hora, los viajes); la fiesta, al final
window.CAPITULOS = ['primeras', 'casa', 'granja', 'feria', 'plaza', 'doctor', 'escuela', 'restaurante', 'reloj', 'aeropuerto', 'playa', 'fiesta'];
window.PROXIMOS = [];   // semanas que se muestran como "¡Pronto!"
