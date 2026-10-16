/* Dibujitos de las palabras del nivel 0 (idiomas/nivel0.js): uno por palabra, en el mismo orden que los grupos.
   Cada uno es una función (color del grupo) → el interior de un dibujo de 100×100.
   Se muestran con n0Dibujo(gi, wi) en juego.js. Para una palabra nueva, sumá su dibujo en el mismo lugar. */
(()=>{
const K='#22314F', OL='stroke="#22314F" stroke-opacity=".32" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
const R=(x,y,w,h,f,r=4)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" ${OL}/>`;
const C=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${OL}/>`;
const E=(x,y,rx,ry,f,rot=0)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${OL}${rot?` transform="rotate(${rot} ${x} ${y})"`:''}/>`;
const P=(d,f)=>`<path d="${d}" fill="${f}" ${OL}/>`;
const L=(d,s=K,w=5)=>`<path d="${d}" fill="none" stroke="${s}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const T=(t,x,y,s=40,f=K)=>`<text x="${x}" y="${y}" font-family="'Baloo 2',sans-serif" font-weight="800" font-size="${s}" text-anchor="middle" fill="${f}">${t}</text>`;
const STAR=(x,y,r,f='#FFC93C')=>`<path d="${[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;return (i?'L':'M')+(x+Math.cos(a)*q).toFixed(1)+' '+(y+Math.sin(a)*q).toFixed(1);}).join('')}Z" fill="${f}" ${OL}/>`;
const HEART=(x,y,s,f='#FF6F8F')=>`<path d="M${x} ${y+s*.9}C${x-s*1.5} ${y-s*.1} ${x-s*.7} ${y-s*1.1} ${x} ${y-s*.35}C${x+s*.7} ${y-s*1.1} ${x+s*1.5} ${y-s*.1} ${x} ${y+s*.9}Z" fill="${f}" ${OL}/>`;
const ARR=(x1,y1,x2,y2,c,w=8)=>{const a=Math.atan2(y2-y1,x2-x1),h=Math.max(15,w*1.7+6);return L(`M${x1} ${y1}L${x2} ${y2}`,c,w)+`<path d="M${x2} ${y2}L${(x2-Math.cos(a-.5)*h).toFixed(1)} ${(y2-Math.sin(a-.5)*h).toFixed(1)}L${(x2-Math.cos(a+.5)*h).toFixed(1)} ${(y2-Math.sin(a+.5)*h).toFixed(1)}Z" fill="${c}" stroke="${c}" stroke-width="4" stroke-linejoin="round"/>`;};
const PIN=(x,y,s,f)=>`<g transform="translate(${x} ${y}) scale(${s})">${P('M0 0C-18-24-26-34-26-46a26 26 0 0 1 52 0c0 12-8 22-26 46z',f)}${C(0,-46,10,'#fff')}</g>`;
const MANO=(x,y,s,f='#F7D3B5')=>`<g transform="translate(${x} ${y}) scale(${s})">${R(-22,-16,44,40,f,16)}${[-18,-6,6,18].map((d,i)=>R(d-5,-44-(i%3===1?4:0),10,34,f,5)).join('')}${R(-34,-6,14,26,f,7).replace('<rect','<rect transform="rotate(-24 -27 7)"')}</g>`;
const CAJA=(c,abierta)=>abierta?P('M20 50h60v34H20z',c)+P('M16 40L30 22H70l14 18z','#fff')+P('M16 40L8 24l22-10',c).replace('fill="'+c+'"','fill="'+c+'"')+R(44,50,12,34,'#FFC93C',2):R(20,44,60,40,c,4)+R(14,34,72,14,c,4)+R(44,34,12,50,'#FFC93C',2)+L('M50 34Q36 14 28 26Q38 34 50 34Q62 34 72 26Q64 14 50 34','#FFC93C',4);
const PERSONA=(x,y,s,f)=>`<g transform="translate(${x} ${y}) scale(${s})">${C(0,-26,13,'#F7D3B5')}${P('M-24 24a24 22 0 0 1 48 0z',f)}</g>`;
const OJO=()=>E(50,50,38,24,'#fff')+C(50,50,15,'#2E86DE')+C(50,50,7,K)+C(55,45,3,'#fff');
const FLECHA_CIRC=(c)=>L('M74 38A28 28 0 1 0 78 58',c,9)+`<path d="M60 30L82 30L80 52Z" fill="${c}" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`;
const PIES=(c)=>E(34,62,10,16,c,-8)+E(66,38,10,16,c,8)+[0,1,2,3].map(i=>C(26+i*5,40+i*0-6,0,'#fff')).join('');
const COLORES=['#E8483B','#2E6BD9','#FFC93C','#2FBF8F','#8B6FE8','#FF9B3D','#FF8FB8','#2B2B36','#FFFFFF'];
const PUNTOS=n=>{ const m={1:[[50,50]],2:[[36,50],[64,50]],3:[[50,30],[34,62],[66,62]],4:[[34,34],[66,34],[34,66],[66,66]],5:[[34,32],[66,32],[50,50],[34,68],[66,68]],6:[[34,28],[66,28],[34,50],[66,50],[34,72],[66,72]]}; return `<g transform="translate(-17 -1) scale(.92)">${(m[n]||[]).map(([x,y])=>C(x,y,9,'#FFC93C')).join('')}</g>`; };

window.NIVEL0_COLORES=['#7C5CFF','#2FBF8F','#FF8A3D','#2E86DE','#FF6F8F','#8B6FE8','#E8483B','#F2A007'];
window.NIVEL0_ARTE=[
[ // preguntas
 c=>CAJA(c,false)+T('?',50,70,34,'#fff'),
 c=>PIN(50,88,1.05,c)+E(50,90,22,5,'#22314F').replace('fill="#22314F"','fill="#22314F" opacity=".18"'),
 c=>PERSONA(46,66,1.15,c)+T('?',80,34,36,c),
 c=>R(10,34,24,40,'#E3E9F2',6)+R(38,34,24,40,c,6)+R(66,34,24,40,'#E3E9F2',6)+STAR(50,54,10,'#fff')+L('M44 24l6-8 6 8','#22314F',3),
 c=>[...Array(8)].map((_,i)=>R(46,10,8,16,c,3).replace('<rect',`<rect transform="rotate(${i*45} 50 50)"`)).join('')+C(50,50,24,c)+C(50,50,10,'#fff'),
 c=>[...Array(7)].map((_,i)=>L(`M${50+Math.cos(i*.9-1.9)*38} ${44+Math.sin(i*.9-1.9)*38}L${50+Math.cos(i*.9-1.9)*48} ${44+Math.sin(i*.9-1.9)*48}`,'#FFC93C',4)).join('')+C(50,42,24,'#FFE27A')+R(40,66,20,12,'#B7C3D4',3)+R(43,78,14,6,'#8FA1B8',3)+T('?',50,52,30,'#B8860B'),
 c=>C(50,50,38,'#fff')+[...Array(12)].map((_,i)=>L(`M${50+Math.sin(i*Math.PI/6)*30} ${50-Math.cos(i*Math.PI/6)*30}L${50+Math.sin(i*Math.PI/6)*34} ${50-Math.cos(i*Math.PI/6)*34}`,'#22314F',2)).join('')+L('M50 50V26M50 50L68 60',c,6)+C(50,50,4,'#E8483B'),
 c=>`<g transform="rotate(-35 50 50)">${R(44,8,12,60,'#FFC93C',3)}${P('M44 68H56L50 84Z','#F7D3B5')}${P('M47 78H53L50 84Z',K)}${R(44,8,12,10,'#FF8FB8',3)}</g>`+L('M20 84H62','#B7C3D4',4),
 c=>[[30,56],[50,40],[70,56]].map(([x,y])=>C(x,y,10,'#FFC93C')).join('')+T('?',50,30,28,c)+L('M24 80H76','#B7C3D4',4),
 c=>E(50,58,36,28,'#E9C892')+C(36,52,7,'#E8483B')+C(54,44,7,'#2E86DE')+C(68,56,7,'#2FBF8F')+C(42,68,7,'#FFC93C')+E(70,72,8,6,'#fff')
],
[ // elogios
 c=>R(16,48,18,36,c,5)+P('M40 48L52 22Q62 22 62 34L58 46H82Q90 46 88 56L82 78Q80 86 72 86H40Z',c),
 c=>STAR(50,52,40)+STAR(82,22,9,'#fff')+STAR(18,76,8,'#fff'),
 c=>C(50,50,40,c)+L('M30 52L45 66L72 36','#fff',11),
 c=>[...Array(10)].map((_,i)=>L(`M${50+Math.cos(i*.628)*14} ${50+Math.sin(i*.628)*14}L${50+Math.cos(i*.628)*36} ${50+Math.sin(i*.628)*36}`,['#FFC93C','#FF6F8F','#2E86DE','#2FBF8F','#8B6FE8'][i%5],6)).join('')+C(50,50,8,'#fff'),
 c=>P('M32 54L24 88L40 80L50 90L52 56Z','#E8483B')+P('M68 54L76 88L60 80L50 90L48 56Z','#2E86DE')+C(50,40,26,'#FFC93C')+C(50,40,17,'#FFE27A')+STAR(50,40,10,'#FFC93C'),
 c=>FLECHA_CIRC(c),
 c=>C(50,50,38,'#fff')+C(50,50,26,'#E8483B')+C(50,50,14,'#fff')+C(50,50,6,'#E8483B')+ARR(86,18,60,42,'#2E86DE',5),
 c=>L('M18 52L40 76L84 26',c,16),
 c=>L('M24 24L76 76M76 24L24 76','#E8483B',16),
 c=>HEART(50,46,36)
],
[ // el juego dice
 c=>FLECHA_CIRC(c)+L('M44 44Q50 38 56 44M40 50Q50 40 60 50','#22314F',3),
 c=>PERSONA(24,60,.62,c)+PERSONA(50,64,.7,'#FFC93C')+PERSONA(76,60,.62,'#2E86DE')+L('M16 90Q50 106 84 90','#22314F',3),
 c=>PERSONA(70,58,1,c)+ARR(8,60,44,60,'#FFC93C',10),
 c=>P('M34 62Q20 54 22 38Q26 14 50 14Q76 14 76 38Q76 52 62 62Q56 68 56 78Q54 88 44 86Q34 86 36 76',c)+L('M42 36Q48 26 58 34Q62 42 52 48','#fff',6),
 c=>OJO(),
 c=>P('M14 20H86Q92 20 92 28V58Q92 66 86 66H50L30 84V66H14Q8 66 8 58V28Q8 20 14 20Z',c)+L('M24 36H76M24 50H60','#fff',6),
 c=>C(50,50,14,c)+C(50,50,26,'none').replace('fill="none"','fill="none" stroke="#FF8A3D" stroke-width="3"')+C(50,50,38,'none').replace('fill="none"','fill="none" stroke="#FF8A3D" stroke-width="2" stroke-opacity=".5"')+P('M54 54L84 62L70 70L82 88L74 92L62 74L52 84Z','#fff'),
 c=>C(42,42,24,'#BFE6FA')+L('M60 60L84 84','#8A5E3B',12)+C(42,42,24,'none').replace('fill="none"','fill="none" stroke="#22314F" stroke-width="6"'),
 c=>R(12,30,34,44,'#E3E9F2',6)+R(54,30,34,44,'#fff',6)+C(71,52,20,'none').replace('fill="none"',`fill="none" stroke="${c}" stroke-width="6"`)+L('M62 52L69 60L82 44',c,6),
 c=>P('M26 14H74L56 50L74 86H26L44 50Z','#BFE6FA')+P('M32 20H68L54 48H46Z',c)+P('M44 66L50 56L56 66L66 84H34Z',c)+R(20,10,60,8,'#8A5E3B',3)+R(20,82,60,8,'#8A5E3B',3)
],
[ // palabritas
 c=>C(40,60,16,c)+ARR(14,22,32,48,K,6),
 c=>C(78,28,8,c)+ARR(10,86,66,36,K,6)+L('M10 86L22 74','#fff',0),
 c=>PIN(50,84,1.1,c),
 c=>PIN(74,50,.55,c)+L('M16 86Q30 60 60 52','#22314F',3).replace('stroke-linecap="round"','stroke-linecap="round" stroke-dasharray="2 8"')+C(16,86,6,'#FFC93C'),
 c=>ARR(50,86,50,18,c,16),
 c=>ARR(50,14,50,82,c,16),
 c=>C(54,52,38,c)+C(20,80,8,'none').replace('fill="none"',`fill="none" stroke="${c}" stroke-width="3"`),
 c=>C(50,52,12,c)+C(50,52,40,'none').replace('fill="none"',`fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="5 6"`),
 c=>L('M50 20V80M20 50H80',c,16)+C(80,22,6,'#FFC93C')+C(20,80,6,'#FFC93C'),
 c=>FLECHA_CIRC(c)+C(50,50,6,'#FFC93C')
],
[ // palabras amables
 c=>MANO(50,66,1.05)+L('M16 34Q10 50 16 66','#FF6F8F',5)+L('M84 34Q90 50 84 66','#FF6F8F',5),
 c=>MANO(44,68,1)+ARR(70,30,92,48,c,6).replace('M70 30','M72 24'),
 c=>`<g transform="rotate(-18 50 80)">${R(30,22,22,56,'#F7D3B5',10)}</g><g transform="rotate(18 50 80)">${R(48,22,22,56,'#F7D3B5',10)}</g>`+R(34,70,32,16,'#F7D3B5',8)+L('M22 20Q30 10 40 14M78 20Q70 10 60 14','#FF6F8F',4),
 c=>C(50,50,38,'#FFD84D')+C(36,44,5,K)+C(64,44,5,K)+L('M34 70Q50 56 66 70',K,6)+P('M70 52Q76 62 70 68Q64 62 70 52Z','#7CC6F0'),
 c=>C(50,50,40,'#fff')+C(50,50,18,'#E8EEF6')+[0,1,2,3].map(i=>P('M50 10A40 40 0 0 1 90 50L68 50A18 18 0 0 0 50 32Z','#E8483B').replace('<path',`<path transform="rotate(${i*90} 50 50)"`)).join(''),
 c=>MANO(30,70,.8)+STAR(72,30,16),
 c=>HEART(50,46,36,c)+STAR(80,20,8)+STAR(18,22,6,'#fff'),
 c=>C(50,54,36,'#FFD84D')+C(38,48,5,K)+C(62,48,5,K)+L('M38 70H62',K,6)+T('?',50,26,34,c),
 c=>PERSONA(76,62,1,'#2E86DE')+ARR(8,64,48,64,c,10),
 c=>L('M16 80Q18 40 50 36',c,10)+ARR(46,40,86,28,c,10)+STAR(70,76,9)
],
[ // acciones
 c=>CAJA(c,false).replace(/<g[\s\S]*$/,'')+MANO(50,36,.8)+HEART(78,76,9),
 c=>CAJA(c,false)+ARR(86,40,60,20,'#22314F',6)+MANO(50,24,.7),
 c=>CAJA('#C98A55',true),
 c=>CAJA('#C98A55',false)+C(50,70,6,'#FFC93C'),
 c=>C(50,56,34,'#E8483B')+P('M50 22Q52 10 66 8Q64 22 50 22Z','#2FBF8F')+E(76,44,12,12,'#F2F5FA').replace('<ellipse','<ellipse opacity=".0"'),
 c=>P('M26 24H74L68 84Q67 90 60 90H40Q33 90 32 84Z','#BFE6FA')+P('M30 44H70L66 84Q65 88 60 88H40Q35 88 34 84Z','#2E86DE')+L('M58 40L68 8L82 12','#FF6F8F',6),
 c=>C(50,52,38,'#E8483B')+L('M14 52Q50 34 86 52','#fff',5)+L('M14 52Q50 70 86 52','#fff',5)+L('M50 14V90','#fff',5),
 c=>P('M60 12A36 36 0 1 0 88 66A30 30 0 0 1 60 12Z','#FFD84D')+T('z',74,42,24,c)+T('Z',86,26,30,c),
 c=>PIES(c)+PIES('#FFC93C').replace(/<ellipse/g,'<ellipse opacity=".0"'),
 c=>ARR(50,86,50,22,c,14)+E(50,92,26,6,'#22314F').replace('fill="#22314F"','fill="#22314F" opacity=".16"')+C(50,40,0,'#fff')
],
[...COLORES.map(col=>()=>E(50,86,30,6,'#22314F').replace('fill="#22314F"','fill="#22314F" opacity=".14"')+P('M50 12C74 12 86 30 86 52S72 88 50 88 14 74 14 52 26 12 50 12Z',col)+E(36,34,12,7,'#fff',-30).replace('<ellipse','<ellipse opacity=".55"'))],
[1,2,3,4,5,6].map(n=>c=>R(8,8,84,84,'#FFF6DC',14)+PUNTOS(n)+T(String(n),78,72,44,c))
];
// al terminar el árbol, los dibujos que quedaron sin color propio usan el del grupo
})();
