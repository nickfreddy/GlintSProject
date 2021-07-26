require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
}); // Config environment
const express = require('express'); // Import express
const fileUpload = require('express-fileupload');

const app = express(); // Make express app

/* Import routes */
const transactions = require('./routes/transactions');
const auth = require('./routes/auth');

/* Import errorHander */
const errorHandler = require('./middlewares/errorHandler');

/* Enables req.body */
app.use(express.json()); // Enables req.body (JSON)
// Enables req.body (url-encoded)
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Enable req.body and req.files (form-data) */
app.use(fileUpload());

/* Make public folder for static file */
app.use(express.static('public'));

/* Use the routes */
app.use('/transactions', transactions);
app.use('/auth', auth);

/* If route not found */
app.all('*', (req, res, next) => {
  try {
    next({ message: 'Endpoint not found', statusCode: 404 });
  } catch (error) {
    next(error);
  }
});

/* Use error handler */
app.use(errorHandler);

/* Run the server */

app.listen(3000, () => console.log(`Server running on 3000`));
