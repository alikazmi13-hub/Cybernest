const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express());
// require("../Database/connection");
//Gettting Data to Server

app.get("/", (req, res) => {
  res.send("hello I am server from backend");
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

// -------------------------------MONGODB-------------------------------

const mongoose = require("mongoose");
// import express from "./Server";
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.agf58.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("you are connected");
  })
  .catch(() => {
    console.log("you are NOT connect");
  });
