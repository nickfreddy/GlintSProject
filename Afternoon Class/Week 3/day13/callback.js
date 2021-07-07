const fs = require('fs');

fs.readFile('./data/amri.txt', 'utf-8', (err, amri) => {
  if (err) throw err;

  fs.readFile('./data/adib.txt', 'utf-8', (err, adib) => {
    if (err) throw err;

    fs.readFile('./data/gilang.txt', 'utf-8', (err, gilang) => {
      if (err) throw err;

      fs.writeFile('./data/newFile.txt', `${adib} ${amri} ${gilang}`, (err) => {
        if (err) throw err;

        console.log('Write done!');

        fs.unlink('./data/newFile.txt', (err) => {
          if (err) throw err;

          console.log('newFile has been deleted!');
        });
      });
    });
  });
});
