require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

const dbURL = process.env.uri;

mongoose
  .connect(dbURL)
  .then(() => console.log("Connected..."))
  .catch(() => {
    console.log("Cannot connect to database");
  });
const userSchema = new mongoose.Schema({
  name: String,
  date: String,
  gender: String,
  problem: String,
  phone: Number,
  email: String,
});

const User = mongoose.model("healthcare", userSchema);

app.use(express.json());

app.post("/register", async (req, res) => {
  const { name, date, gender, problem, phone, email } = req.body;

  if (!name || !date || !gender || !problem || !phone || !email) {
    console.log("if condition triggered today");
    return res.status(400).json({ status: 400 });
  }

  console.log("submit button has triggered /register");
  console.log(req.body);

  const user = new User({
    name,
    date,
    gender,
    problem,
    phone,
    email,
  });

  try {
    const saveRes = await user.save();
    if (saveRes) {
      console.log("You are registered successfully");
      return res.status(201).json({ status: 201 });
    }
  } catch {
    console.log("inside catch");
    return res.status(408).json({ status: 408 });
  }
});

app.get("/", (req, res) => {
  let time = new Date().toLocaleTimeString();
  res.send(`time from the server side ${time} `);
});

let PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is started at port ${PORT}`);
});
