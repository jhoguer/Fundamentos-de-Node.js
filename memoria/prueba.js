let a = 20

function addFive(x) {
  console.log(x)
  x = x + 5
  return x
}

console.log(addFive(++a))