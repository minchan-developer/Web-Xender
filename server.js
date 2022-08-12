require("dotenv").config();

const express = require("express");
const app = express();
//loading express

const cors = require("cors");

const PORT = process.env.PORT || 3000; // checking if port is there in env already , else give 3000->arbritrary port no

const path = require("path");

app.use(express.static("public")); // tells express in which folder is my css file

const connectDB = require("./config/db");
connectDB();

const corsOptions = {
  //origin: process.env.ALLOWED_CLIENTS.split(","),
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs"); //ejs ko install krne ke baad set

//ROUTERS
app.use("/api/files", require("./routes/files"));

app.use("/files", require("./routes/show"));

app.use("/files/download", require("./routes/download")); //for creating the link for the download button

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
