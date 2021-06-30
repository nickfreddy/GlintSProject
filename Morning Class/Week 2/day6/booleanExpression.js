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

// More example
// AND will be displaying the last true when all condition is true, if there are one condition that false, it will return false
let j = 5;
let k = 5;

let result2 = j == k && f == 2 && 'c is equal to d' && 'my name is david';

console.log('result2', result2);

/* OR Operator */
let l = 1;
let m = 2;
let n = 5;
let o = 5;

console.log(l == m || n == o); // true

// More example
// OR will be displaying the first true and if there are no true, it will return false
let p = null;
let q = p || 'my name is gema' || 'my name is bayu';

console.log('q', q);
