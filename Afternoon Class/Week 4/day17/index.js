const express = require('express'); // Import express

const app = express(); // Make express app

/* Import routes */
const transactions = require('./routes/transactions');

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

/* Run the server */
app.listen(3000, () => console.log(`Server running on 3000`));
