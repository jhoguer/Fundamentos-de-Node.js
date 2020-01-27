const asincrona = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e, null);
    }
  }, 1000)
}

asincrona((err, dato) => {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);
    return false;
  }

  console.log('Todo ha ido bien, mi dato es ', dato);
})