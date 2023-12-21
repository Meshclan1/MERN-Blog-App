const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/schemas/User");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");

require("dotenv").config();
const mongoDbConnection = process.env.SECRET_KEY;

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const secret = "lorem";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

mongoose.connect(mongoDbConnection);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);
