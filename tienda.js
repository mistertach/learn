/* La tienda: qué se vende, dónde se pone y cuánto cuesta (en pececitos).
   lugar: torso · piernas · cabeza · cara · cuello · espalda
   estilo: torso → liso | rayas | vertical | estrella · piernas → short | largo
           cabeza → gorra | lana | corona · cara → anteojos · cuello → mono | bufanda · espalda → capa
   El nombre de cada cosa en cada idioma está en idiomas/<idioma>.js → ropa. */
window.TIENDA = [
  {id:'remera_roja',     lugar:'torso',   estilo:'liso',     precio:5,  color:'#E8483B'},
  {id:'remera_rayas',    lugar:'torso',   estilo:'rayas',    precio:8,  color:'#1F3A7A', color2:'#FFFFFF'},
  {id:'remera_estrella', lugar:'torso',   estilo:'estrella', precio:10, color:'#8B6FE8', color2:'#FFC93C'},
  {id:'camiseta',        lugar:'torso',   estilo:'vertical', precio:12, color:'#FFFFFF', color2:'#74ACDF'},
  {id:'short',           lugar:'piernas', estilo:'short',    precio:4,  color:'#2FBF8F'},
  {id:'pantalon',        lugar:'piernas', estilo:'largo',    precio:6,  color:'#3E64B5'},
  {id:'mono',            lugar:'cuello',  estilo:'mono',     precio:4,  color:'#E8483B'},
  {id:'gorra',           lugar:'cabeza',  estilo:'gorra',    precio:6,  color:'#2E86DE'},
  {id:'bufanda',         lugar:'cuello',  estilo:'bufanda',  precio:6,  color:'#FF9B3D', color2:'#FFFFFF'},
  {id:'anteojos',        lugar:'cara',    estilo:'anteojos', precio:7,  color:'#FF6F8F'},
  {id:'gorro',           lugar:'cabeza',  estilo:'lana',     precio:8,  color:'#2FBF8F', color2:'#FFFFFF'},
  {id:'capa',            lugar:'espalda', estilo:'capa',     precio:15, color:'#E8483B', color2:'#FFC93C'},
  {id:'corona',          lugar:'cabeza',  estilo:'corona',   precio:20, color:'#FFC93C', color2:'#E8483B'},
  {id:'gadget_agua',      lugar:'gadget',  estilo:'agua',      precio:6,  color:'#2E86DE', color2:'#7CC6F0'},
  {id:'gadget_musica',    lugar:'gadget',  estilo:'musica',    precio:8,  color:'#E8483B', color2:'#FFC93C'},
  {id:'gadget_burbujas',  lugar:'gadget',  estilo:'burbujas',  precio:10, color:'#2FBF8F', color2:'#FFFFFF'},
  {id:'gadget_estrellas', lugar:'gadget',  estilo:'estrellas', precio:12, color:'#FFC93C', color2:'#FFF59A'},
  {id:'gadget_fiesta',    lugar:'gadget',  estilo:'fiesta',    precio:15, color:'#8B6FE8', color2:'#FF8FB8'}
];
