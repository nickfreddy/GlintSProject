// Global variable
let a = 10;

// Function
function hello() {
  // Local variable
  let a = 5;
  console.log(a);
}

function getGlobal() {
  // Use the global variable
  console.log(a + 5);
}

console.log(a); // It will print the global variable not the local because you can not access the local outside the "hello" function

hello(); // Call hello function
getGlobal(); // Call getGlobal function
