const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

let data = [];

readFile('./data/amri.txt', 'utf-8')
  .then((amri) => {
    data.push(amri);

    return readFile('./data/adib.txt', 'utf-8');
  })
  .then((adib) => {
    data.push(adib);

    return readFile('./data/gilang.txt', 'utf-8');
  })
  .then((gilang) => {
    data.push(gilang);

    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Yeahhh');
  });
