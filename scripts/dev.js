/* Servidor para probar en tu compu: sirve el juego y las funciones de api/ como lo hace Vercel.
   Uso: npm install, copiá .env.example como .env y completalo, y después npm run dev */
const http = require('http'), fs = require('fs'), path = require('path');
const RAIZ = path.join(__dirname, '..');

// .env sin dependencias
try{ for(const l of fs.readFileSync(path.join(RAIZ, '.env'), 'utf8').split('\n')){ const m = l.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/); if(m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, ''); } }catch(e){}

const TIPOS = {'.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.ico':'image/x-icon'};
const PUERTO = process.env.PORT || 3000;

http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x');
  if(u.pathname.startsWith('/api/')){
    const nombre = u.pathname.slice(5).replace(/[^\w-]/g, '');
    const archivo = path.join(RAIZ, 'api', nombre + '.js');
    if(!fs.existsSync(archivo)){ res.statusCode = 404; return res.end('{"error":"No existe"}'); }
    req.query = Object.fromEntries(u.searchParams);
    return require(archivo)(req, res);
  }
  let rel = decodeURIComponent(u.pathname); if(rel.endsWith('/')) rel += 'index.html';
  const archivo = path.join(RAIZ, path.normalize(rel));
  if(!archivo.startsWith(RAIZ) || /node_modules|servidor|\.env/.test(archivo)){ res.statusCode = 404; return res.end(); }
  fs.readFile(archivo, (err, buf) => {
    if(err){ res.statusCode = 404; return res.end('No existe'); }
    res.setHeader('Content-Type', TIPOS[path.extname(archivo)] || 'application/octet-stream');
    res.end(buf);
  });
}).listen(PUERTO, () => console.log(`Listo: http://localhost:${PUERTO}  (administración: http://localhost:${PUERTO}/admin.html)`));
