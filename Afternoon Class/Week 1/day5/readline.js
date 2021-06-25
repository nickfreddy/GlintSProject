// Importing Module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Code here!

/*
 * This function is being used to greet people
 * The result of that function should be:
 * "Hello, <name>, looks like you're <age>! And you lived in <city>!"
 *
 * HINT:
 * To get the current year, let say 2020;
 * You can use this code
 *
 * const currentDate = new Date();
 * const currentYear = currentDate.getFullYear();
 * */
function myName(firstName, lastName) {
  // Insert your code here!
  console.log('\nMy name is ' + firstName + ' ' + lastName);
}

// DON'T CHANGE
console.log('Your Full Name\n');
// GET User's Name
rl.question('What is your first name? ', (first) => {
  // GET User's Address
  rl.question('What is your last name? ', (last) => {
    myName(first, last);

    rl.close();
  });
});

rl.on('close', () => {
  process.exit();
});
