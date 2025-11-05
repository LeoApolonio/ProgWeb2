const http = require('http');

const port = 3056;

const server = http.createServer((req, res) => 
    {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.send('Hola Mundo');
    });

server.listen(port,()=>
    {
        console.log(`Servidor: http://127.0.0.1:${port}`);
    })