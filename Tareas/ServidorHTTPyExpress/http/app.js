const http = require('http');

const port = 3056;

const server = http.createServer((req, res) => {
  res.write('Hola Mundo');
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor: http://127.0.0.1:${port}`);
});
