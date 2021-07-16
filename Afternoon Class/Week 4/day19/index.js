const express = require('express'); // Import express
const fileUpload = require('express-fileupload'); // Import express-fileupload

const app = express(); // Make express app

/* Import routes */
const transactions = require('./routes/transactions');
const goods = require('./routes/goods');

/* Import errorHandler */
const errorHandler = require('./middlewares/errorHandler');

/* Enable req.body */
app.use(express.json()); // Enable req.body JSON
// Enable url-encoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Enables req.body with form-data */
app.use(fileUpload());

/* 
  Add public folder to be static folder
  It means that public folder will be save files such as images, videos, documents, and other static files
  So, you just can get images with /images/:imageName
*/
app.use(express.static('public'));

/* Use routes */
app.use('/transactions', transactions);
app.use('/goods', goods);

/* User errorHandler */
app.use(errorHandler);

/* Running server */
app.listen(3000, () => console.log(`Server running on port 3000!`));
