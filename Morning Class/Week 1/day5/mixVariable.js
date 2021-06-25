let a = 1;
var b = 2;
const c = 3;

let d = a + b + c;
console.log(d); // Output 1 + 2 + 3

a = 5;
b = 6;

d = a + b + c;
console.log(d); // Output 5 + 6 + 3

// This is var
e = 5;
console.log(e);

// If we use var, it will not throw the error and the reccommend way is use let or const
var f = 7;
var f = 5;
