// ========== SERVIDOR BACKEND ==========

// Simular un servidor simple (usando Node.js sin dependencias externas)
// Para un servidor real, instala: npm install express cors

// Importar los controladores
const miembroController = require('./controllers/miembroController');
const temasController = require('./controllers/temasController');
const semilleroData = require('./data/semilleroData');

// Para desarrollo simple, puedes usar HTTP nativo de Node.js
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    res.setHeader('Content-Type', 'application/json');

    // Rutas
    if (req.url === '/api/semillero' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(semilleroData));
    } else if (req.url === '/api/temas' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(temasController.obtenerTodos()));
    } else if (req.url === '/api/miembros' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const datos = JSON.parse(body);
            const resultado = miembroController.crearMiembro(datos);
            res.writeHead(201);
            res.end(JSON.stringify(resultado));
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});