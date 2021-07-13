// get the client
const mysql = require('mysql2');

// create the connection to database
exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sales_morning',
});
