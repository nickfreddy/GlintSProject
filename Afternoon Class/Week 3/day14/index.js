const express = require('express'); // Import express

const app = express(); // Make express app

// Import routes
const helloRoutes = require('./routes/helloRoutes');

// Use the routes
app.use('/', helloRoutes);

app.listen(3000, () => console.log(`Server running on port 3000`)); // Server will be run on port 3000
