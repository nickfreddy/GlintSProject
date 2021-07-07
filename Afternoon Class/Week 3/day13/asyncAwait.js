const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const read = async () => {
  try {
    let amri = await readFile('./data/amri.txt', 'utf-8');
    let adib = await readFile('./data/adib.txt', 'utf-8');
    let gilang = await readFile('./data/gilang.txt', 'utf-8');

    console.log(`${amri} ${adib} ${gilang}`);
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

read().then(() => read1());
