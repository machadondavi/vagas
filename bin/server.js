'use strict'

const app = require('../src/app');
const http = require('http');
const cors = require('cors');


const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

const server = http.createServer(app);

app.use(cors());

server.listen(port);
console.log('API rodando na porta ' + port);

function normalizePort(valor) {
    const port = parseInt(valor, 10);

    if(isNaN(port)) {
        return valor;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

