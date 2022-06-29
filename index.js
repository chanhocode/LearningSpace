const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://chanoho:chanho@boilerplate.0waef.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => rex.send("Hello World!! _  안녕하세요~"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
