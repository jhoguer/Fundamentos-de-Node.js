function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola ' + nombre);
      resolve(nombre);
    }, 2000);
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...');
      resolve(nombre);
      // reject('El ERROR!!!xxxxx!!!')
    }, 1000)
  })
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios ' + nombre);
      resolve(nombre)
    }, 1500)
  })
}

console.log('Iniciando el proceso...')

hola('Jhon L')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminando el proceso!!!' + nombre);
  })
  .catch(err => {
    console.error('Hubo un error inesperado: ' + err);
  })
 