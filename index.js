const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

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
app.use(morgan("dev"));
app.use(cors());

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

// routes

app.use("/categories",require("./routes/categories"));
app.use("/projects",require("./routes/projects"));

app.get("/",(req, res) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Content-type","text/plain");

  res.send("welcome to alguero.tk backend API");
})

app.use("/*",(req, res) =>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Content-type","application/json");

  res.status(404).json({status: 404, message:"Route Not Found, please try again"});
})

