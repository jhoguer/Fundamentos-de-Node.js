function hola(nombre, callbackDehola) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    callbackDehola(nombre);
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000)
}

function adios(nombre, callbackConversacion) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    callbackConversacion()
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
  conversacion(nombre, 5, () => {    
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
