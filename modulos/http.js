const http = require('http');



const router = (req, res) => {
  console.log('Nueva peticion!!');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal');
      res.end();
      break;
    
    default:
      res.write('Error 404: no se lo que quieres');
      res.end();
  }

  // res.writeHead(201, { 'Content-Type': 'text/plain' });

  // // Escribir respuesta la usuario
  // res.write('Hola, ya se usar http de Node.js')

  // res.end();
}
http.createServer(router).listen(3000, () => {
  console.log('Escuchando http en el puerto 3000');
});