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

async function main() {
  let nombre = await hola('Jhon Leider');
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminamos el proceso');

}

console.log('Empezamos el proceso');
main();