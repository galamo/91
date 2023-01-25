function page31Ex1() {
  let b = 32;
  let c = -b;
  for (let a = b; a > 1; a = a + c) {
    c = parseInt(c / 2);
    b = b - 8;
  }
  console.log(`Printing B according the Picture ${b}`);
}
// c - c is not relevant and this will throw an Error

// page31Ex1();
