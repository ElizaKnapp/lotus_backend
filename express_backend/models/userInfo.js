const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user model
const UserInfoSchema = new Schema({
  username: {
    type: String, 
    required: true
  },
  first_name: {
    type: String, 
    required: true
  },
  last_name: {
    type: String, 
    required: true
  },
  birthday: {
    type: String, 
    required: true
  },
  gender: {
    type: String, 
    required: true
  },
  profile_visibility: {
    type: String, 
    required: true
  }
})

//this saves the user model in a users collection in mongo
const UserInfo = mongoose.model("userInfo", UserInfoSchema);
module.exports = UserInfo;