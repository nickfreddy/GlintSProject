const fs = require('fs');

fs.readFile('./data/david.txt', 'utf-8', (err, david) => {
  if (err) throw err;

  fs.readFile('./data/kim.txt', 'utf-8', (err, kim) => {
    if (err) throw err;

    fs.readFile('./data/gema.txt', 'utf-8', (err, gema) => {
      if (err) throw err;

      let newFile = `${david} ${kim} ${gema}`;

      fs.writeFile('./data/newFile.txt', newFile, (err) => {
        if (err) throw err;

        console.log('Writing done!');

        fs.readFile('./data/newFile.txt', 'utf-8', (err, newData) => {
          if (err) throw err;

          console.log(newData);

          fs.unlink('./data/newFile.txt', (err) => {
            if (err) throw err;

            console.log('Delete newFile success');
          });
        });
      });
    });
  });
});
