const express = require('express'); // Import express

const app = express(); // Make express app

/* Import routes */
const transactions = require('./routes/transactions');

/* Import errorHandler */
const errorHandler = require('./middlewares/errorHandler');

/* Enables req.body */
app.use(express.json()); // Enables req.body (JSON)
// Enables req.body (url-encoded)
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Use the routes */
app.use('/transactions', transactions);

/* Use errorHandler */
app.use(errorHandler);

/* Run the server */
app.listen(3000, () => console.log(`Server running on 3000`));
