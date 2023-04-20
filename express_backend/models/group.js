const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user model
const GroupSchema = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  about: {
    type: String, 
    required: true
  },
  num_members: {
    type: Number, 
    required: true
  },
  tags: [
    {
      tag: {
        type: String, 
        required: true
      }
    }
  ],
  posts: [
    {
      post: {
        title: {
          type: String, 
          required: true
        }
      }
    }
  ],

  time: { // this is just going to be the string formatter just in case it doesn't work
    type: String, 
    required: true
  }
 
})

//this saves the user model in a users collection in mongo
const Group = mongoose.model("group", GroupSchema);
module.exports = Group;