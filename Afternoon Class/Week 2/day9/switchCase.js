const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  rl.question('Your choice: ', (userChoice) => {
    switch (eval(userChoice)) {
      case 1:
        console.log(`You choosed ${userChoice}`);
        rl.close();
        break;
      case 2:
        console.log(`You choosed 2`);
        rl.close();
        break;
      case 3:
        console.log(`You choosed 3`);
        rl.close();
        break;
      default:
        console.log('You choosed default');
        question();
        break;
    }
  });
}

question();

// If no readline
// let userChoice = 1;

// switch (userChoice) {
//   case 1:
//     console.log(`You choosed ${userChoice}`);
//     break;
//   case 2:
//     console.log(`You choosed 2`);
//     break;
//   case 3:
//     console.log(`You choosed 3`);
//     break;
//   default:
//     console.log('You choosed default');
//     break;
// }
