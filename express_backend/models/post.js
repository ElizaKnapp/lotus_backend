const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user model
const PostSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  author: {
    type: String, 
    required: true
  },
  time: {
    type: String, 
    required: true
  },
  group: {
    type: String,
    required: true
  }, 
  content: {
    type: String,
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
  flagged: {
    type: Boolean,
    required: true
  }
})

//this saves the user model in a users collection in mongo
const Post = mongoose.model("post", PostSchema);
module.exports = Post;