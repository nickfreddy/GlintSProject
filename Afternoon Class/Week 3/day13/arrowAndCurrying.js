/* Arrow function */
function adderFunc(x, y) {
  return x + y;
}

const adderArrowReturn = (x, y) => x + y;

const adderArrow = (x, y) => {
  return x + y;
};

const adderArrowConsole = (x, y) => {
  console.log(x + y);
};

let adder1 = adderFunc(10, 11);
let adder2 = adderArrowReturn(10, 11);
let adder3 = adderArrow(10, 11);

console.log(`${adder1}, ${adder2}, ${adder3}`);
adderArrowConsole(10, 11);

/* Currying function */
function substractFunc(x, y) {
  return x - y;
}

const substractCurryReturn = (x) => (y) => x > y ? x - y : y - x;

const substractCurry = (x) => (y, a) => (z) => {
  return x - y - a + z;
};

const substractCurryConsole = (x) => (y) => {
  console.log(x - y);
};

let substract1 = substractFunc(11, 10);
let substract2 = substractCurryReturn(17)(10);
let substract3 = substractCurry(11)(10, 5)(20);

console.log(`${substract1}, ${substract2}, ${substract3}`);

let number = substractCurryReturn(200000);
let number1 = number(10000);
let number2 = number(150000);

console.log(`${number1}, ${number2}`);
