require("dotenv").config(); //.env load kiya for the url

const mongoose = require("mongoose"); //loading mongoose

function connectDB() {
  console.log("nav", process.env.MONGODB_CONNECTION_URL);

  //database connection   ke liye function(connects the database)
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //just copy this url

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("Database connected");
  });
  connection.on("error", (err) => {
    console.log("Error connecting to Database.");
  });
}

module.exports = connectDB;
