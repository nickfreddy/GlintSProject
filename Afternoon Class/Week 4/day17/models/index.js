// get the client
const mysql = require('mysql2');
const { promisify } = require('util');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sales_afternoon',
});

exports.query = promisify(connection.query).bind(connection);
