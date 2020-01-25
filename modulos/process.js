process.on('beforeExit', () => {
  console.log('El proceso va a terminar!!!');
})

process.on('exit', () => {
  console.log('El proceso acabo!!!');
  setTimeout(() => {
    console.log('Esto nunca se va a ver');
  })
})

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  setTimeout(() => {
    console.log('Esto viene de las excepciones');
  }, 0)
  
})

setTimeout(() => {
  console.log('Esto se va a ver');
}, 0);
funcionqueNoExiste();

console.log('Esto si el error no de recoje no sale');