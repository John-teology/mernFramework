// importing
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

// using the imports
app.use(express.json());
app.use(cors());


// mongodb+srv://admin:<password>@merntest.fulum.mongodb.net/test  sa compass
mongoose.connect(
  "mongodb+srv://admin:admin@merntest.fulum.mongodb.net/merntest?retryWrites=true&w=majority"
);
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001);
