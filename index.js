const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  require("dotenv").config({
    path: path.resolve(__dirname, ".env"),
  });
} else {
  require("dotenv").config({
    path: path.resolve(__dirname, ".env.dev"),
  });
}

// middleware
app.use(morgan("common"));

// routess

// connect to DB and listen

mongoose.connect(
  process.env.DATABASE_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;

    app.listen(PORT, () => {
      console.log(`app listening in PORT :${PORT}`);
    });
  }
);
