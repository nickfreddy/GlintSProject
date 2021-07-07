const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);

const read = async () => {
  try {
    let davidKim = await Promise.all([
      readFile('./data/david.txt', 'utf-8'),
      readFile('./data/kim.txt', 'utf-8'),
    ]);
    // let davidKim = `${david} ${kim}`;

    let gema = davidKim[0];
    gema += await readFile('./data/gema.txt', 'utf-8');

    console.log(gema);
    console.log(davidKim[0] + ' ' + davidKim[1]);
  } catch (error) {
    throw error;
  }
};

const read1 = async () => {
  try {
    let newData = `Hello`;
    console.log(newData);
  } catch (error) {
    throw error;
  }
};

read();
read1();
