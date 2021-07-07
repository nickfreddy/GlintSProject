const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);

let newData = '';

readFile('./data/david1.txt', 'utf-8')
  .then((david) => {
    newData += david;

    return readFile('./data/kim.txt', 'utf-8');
  })
  .then((kim) => {
    newData += kim;

    console.log(newData);
  })
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('Yaaaaa');
  });
