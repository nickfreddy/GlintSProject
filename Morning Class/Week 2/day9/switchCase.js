const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Your choice: ', (userChoice) => {
  switch (eval(userChoice)) {
    case 1:
      console.log("You're choosing 1");
      rl.close();
      break;
    case 2:
      console.log("You're choosing 2");
      rl.close();
      break;
    case 3:
      console.log("You're choosing 3");
      rl.close();
      break;
    default:
      console.log("You're not choosing anymore");
      rl.close();
      break;
  }
});

// Not using readline
// let userChoice = 1;

// switch (userChoice) {
//   case 1:
//     console.log("You're choosing 1");
//     break;
//   case 2:
//     console.log("You're choosing 2");
//     break;
//   case 3:
//     console.log("You're choosing 3");
//     break;
//   default:
//     console.log("You're not choosing anymore");
//     break;
// }
