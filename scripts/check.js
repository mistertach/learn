/* Revisa que todos los .js tengan sintaxis válida (lo mismo que node --check, archivo por archivo). */
const { execFileSync } = require('child_process'), fs = require('fs'), path = require('path');
const RAIZ = path.join(__dirname, '..');
const lista = d => fs.readdirSync(d, {withFileTypes:true}).flatMap(e => e.name==='node_modules'||e.name.startsWith('.') ? [] : e.isDirectory() ? lista(path.join(d, e.name)) : e.name.endsWith('.js') ? [path.join(d, e.name)] : []);
let mal = 0;
for(const f of lista(RAIZ)){ try{ execFileSync(process.execPath, ['--check', f], {stdio:'pipe'}); }catch(e){ mal++; console.error(path.relative(RAIZ, f) + '\n' + e.stderr); } }
console.log(mal ? `${mal} archivo(s) con errores` : 'Todo bien'); process.exit(mal ? 1 : 0);
