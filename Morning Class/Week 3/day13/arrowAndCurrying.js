/* Arrow function */
const adderArrowReturn = (x, y) => x * y;

const adderArrow = (x, y) => {
  return x * y;
};

const adderConsole = (x, y) => {
  console.log(`${x * y}`);
};

function adderFunc(x, y) {
  return x * y;
}

const adder1 = adderArrowReturn(10, 11);
const adder2 = adderArrow(10, 11);
const adder3 = adderFunc(10, 11);

adderConsole(10, 11);
console.log(`${adder1}, ${adder2}, ${adder3}`);

/* Currying function */
const substractCurryReturn = (x) => (y) => x - y;

const substractCurry = (x) => (y) => {
  return x - y;
};

const substractCurryConsole = (x) => (y) => (z) => {
  console.log(x - y + z);
};

function substactFunc(x, y) {
  return x - y;
}

const substact1 = substractCurryReturn(10)(11);
const substact2 = substractCurry(10)(11);
const substact3 = substactFunc(10, 11);

substractCurryConsole(10)(11)(12);
console.log(`${substact1}, ${substact2}, ${substact3}`);

const subtractNumber = substractCurryReturn(200000);
console.log(subtractNumber(80000));
console.log(subtractNumber(100000));
console.log(subtractNumber(50000));
