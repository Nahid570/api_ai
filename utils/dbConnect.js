const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://Nahid570:faraji5702@cluster0.dhotjns.mongodb.net/ai-master?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn, dbConnection;

const connectToServer = async () => {
  try {
    conn = client.connect();

    console.log("DB connect");
  } catch (e) {
    console.error(e);
  }
};

const getDb = () => {
  dbConnection = conn.db("ai-master");

  return dbConnection;
};

module.exports = { connectToServer, getDb };
