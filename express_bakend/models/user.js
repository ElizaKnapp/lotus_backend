const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user model
const UserSchema = new Schema({
  username: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  }, 
  email: {
    type: String, 
    required: true
  }
})

//this saves the user model in a users collection in mongo
const User = mongoose.model("user", UserSchema);
module.exports = User;