// Global variable
let a = 10;

function hello() {
  // Local variable
  // console.log(a);
  let a = 5;
  console.log(a);
}

function getGlobal() {
  // it will try to call let in global
  console.log(a);
}

console.log(a);

hello(); // Call hello()
getGlobal(); // Call global
