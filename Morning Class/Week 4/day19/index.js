const express = require('express'); // Import express

const app = express(); // Make express app

/* Import routes */
const transactions = require('./routes/transactions');

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

/* Use routes */
app.use('/transactions', transactions);

/* User errorHandler */
app.use(errorHandler);

/* Running server */
app.listen(3000, () => console.log(`Server running on port 3000!`));