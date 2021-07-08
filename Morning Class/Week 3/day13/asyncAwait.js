const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);

const read = async () => {
  try {
    let david = await readFile('./data/david.txt', 'utf-8');
    let kim = await readFile('./data/kim.txt', 'utf-8');
    let gema = await readFile('./data/gema.txt', 'utf-8');

    let newData = `${david} ${kim} ${gema}`;
    console.log(newData);
  } catch (error) {
    throw error;
  }
};

const read1 = async () => {
  try {
    let david = await readFile('./data/david.txt', 'utf-8');
    console.log(david);
  } catch (error) {
    throw error;
  }
};

read();
read1();

for (let index = 0; index < 100000; index++) {
  console.log('Hello, World!');
}
