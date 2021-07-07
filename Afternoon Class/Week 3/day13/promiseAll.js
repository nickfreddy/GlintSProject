const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const read = async () => {
  try {
    let data = await Promise.all([
      readFile('./data/amri.txt', 'utf-8'),
      readFile('./data/adib.txt', 'utf-8'),
    ]);

    let gilang = data[1];
    gilang += await readFile('./data/gilang.txt', 'utf-8');

    console.log(data);
    console.log(gilang);
  } catch (error) {
    console.error(error);
  }
};

const read1 = async () => {
  try {
    console.log('Hello');
  } catch (error) {
    console.error(error);
  }
};

read();
read1();
