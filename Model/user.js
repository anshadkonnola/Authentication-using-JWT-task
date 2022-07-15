const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    unique: "Username must be Unique",
    required: "Username is Required",
  },
  email: {
    type: "string",
    unique: "Email must be Unique",
    required: "Email is Required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Fill a valid Email Address",
    ],
  },
  password: {
    type: "string",
    required: "Password is Required",
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
