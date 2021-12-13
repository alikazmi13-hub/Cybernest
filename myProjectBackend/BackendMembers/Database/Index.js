const express = require("express");
const cors = require("cors");
const axios = require("axios");
const BodyParser = require("body-parser");
const ecp = require("express-csp-header");
const DB =
  "mongodb+srv://alikazmi:bashar1214@we-meet-app.cnr4j.mongodb.net/test";
const app = express();
const PORT = 4000;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express());
// alow port to access header

//Gettting Data to Server
app.post("/api", (req, res) => {
  console.log(res);
  res.send("i am posting from index .js");
});
// get Function
app.get("/api", (req, res) => {
  res.send("i am getting");
});

// listening port
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
// use our App which will poster

// // posting data to mongo
// app.post("/userModel.js", (req, res) => {
//   res.end("saved to mongo");
// });
// -------------------------------MONGODB-------------------------------

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import express from "./Server";

// connection of mongo db
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("hellokazmi i am mongoose");
  })
  .catch((err) => console.log(err, "i am error from index.js"));
