/* Simple boolean expression */
let a = 1 == 2; // false
console.log('a ' + a);

/* Equal Operators */
let b = 1 == 1; // true
let c = 1 != 1; // false
console.log('b', b);
console.log('c', c);

// Strict equal
let d = '1' === 1; // false because different datatype
console.log('d', d);

// Less strict equal
let e = '1' == 1; // true because it is not care about datatype
console.log('e', e);

/* And Operator */
let f = 1;
let g = 2;
let h = 5;
let i = 5;

console.log(f === g && h === i && 1 === 1); // false
console.log(f === 1 && h === i); // true

// More example
let result;

if (f === g) {
  result = 'f is equal to g';
}

console.log(result);
