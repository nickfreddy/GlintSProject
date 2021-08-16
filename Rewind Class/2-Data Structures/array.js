const input = 5;

for (let i = 0; i < input * 2 - 1; i++) {
  if (i < input) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write('1');
    }
    console.log();
  } else {
    for (let j = input * 2 - 1; j > i; j--) {
      process.stdout.write('1');
    }
    console.log();
  }
}
