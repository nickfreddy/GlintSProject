const express = require('express'); // Import express module

const app = express(); // Create express app

// Enable req.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Import routes
const helloRoutes = require('./routes/helloRoutes');

// Use the routes
app.use('/', helloRoutes);

app.listen(3000, () => console.log(`Server running on port 3000`)); // We will run the server in port 3000
