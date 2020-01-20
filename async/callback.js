function hola(nombre, micallback) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    micallback(nombre);
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    otroCallback()
  }, 1500)
}

const conversacion = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}
console.log('Iniciando proceso....');
hola('Jhon', (nombre) => {
  conversacion(nombre, 3, () => {    
    console.log('terminando proceso....');
  })
})
// hola('Jhon Leider', (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         hablar(() => {
//           adios(nombre, () => {
//             console.log('terminando proceso....');
//           })
//         })
//       })
//     })
//   })
// })
