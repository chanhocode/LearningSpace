const express = require("express");
const app = express();
const port = 5000;

const config = require('./config/key')

const { User } = require("./models/User");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    config.mongoURI
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) =>
  res.send("Hello World!! _  안녕하세요~")
);

app.post("/register", (req, res) => {
  // 필요 정보 데이터 베이스 삽입
  const user = new User(req.body);

  user.save((err) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.status(200), json({ success: true });
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
