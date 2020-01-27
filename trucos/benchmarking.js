console.time('todo')
let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let i = 0; i < 100000000; i++) {
  suma2 += 1;
}
console.timeEnd('bucle2');

const asincrona = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve();
    })
  })
}



console.time('asincrono')
console.log('Empieza el proceso asincrono');
asincrona()
  .then(() => {
    console.timeEnd('asincrono');
  })

console.timeEnd('todo');


