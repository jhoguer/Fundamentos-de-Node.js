console.log('algo');
console.info('info');
console.error('Error');
console.warn('Warn');

var tabla = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 2,
    b: 'Otra'
  }
]

console.table(tabla);



console.group('conversacion')
console.log('Hola');
console.group('bla')
console.log('Bla bla bla bla');
console.log('Bla bla bla bla');
console.log('Bla bla bla bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('conversacion');

function funcion1() {
  console.group('Funcion 1')
  console.log('Esto es la funcion 1');
  console.log('Esto tambien es la funcion 1')
  funcion2();
  console.log('esto es lo ultimo de la funcion 1');
  console.groupEnd('Funcion 1');
}

function funcion2() {
  console.group('Funcion 2');
  console.log('Esto es de la funcion 2');
  console.log('esto tambien es de la funcion 2');
  console.groupEnd('Funcion 2');
}

funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');