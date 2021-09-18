const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require('./routers/route');

const dbURI =
  "mongodb+srv://dbUserME:aQw1B49qwRucZ8sr@cluster0.lavkz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("database connected"))
  .catch((err) => console.log(err));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/course', route);

  app.listen(300);