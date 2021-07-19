const { MongoClient } = require('mongodb'); // Import MongoClient

const uri = process.env.MONGO_URI; // Address of Cluster or Server (MongoDB)

const connection = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // Make new connection

// Run the connection
connection
  .connect()
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error(err));

// Export connection
module.exports = connection;
