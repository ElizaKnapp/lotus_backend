const express = require("express");
const router = express.Router();
//imports schema from models
const Post = require("../models/post");

// ------------------------------------ POST Requests ------------------------------------

// Adds a group to the database
router.post("/", function (req, res, next) {
  Post.create(req.body)
    .then(function (post) {
      res.send(post); // sends the message back to the client with the added data
    })
    .catch(next);
});

// ------------------------------------ GET Requests ------------------------------------

// retrieves all group information
router.get("/", async (req, res) => {
  Post.find()
    .then(function(posts) {
      res.send(posts)
    })
    .catch(next);
});

// gets by name
router.get("/byTitle/:title", function (req, res, next) {
  var title = req.params.title;
  Post.find({ title: title })
    .then(function (post) {
      
      res.send(post);
    })
    .catch(next);
});

// TODO: search posts by group

// ------------------------------------ PATCH Requests ------------------------------------

// ------------------------------------ PUT Requests ------------------------------------

// ------------------------------------ DELETE Requests ------------------------------------

// route created to delete all for testing
router.delete("/", function (req, res, next) {
  Post.deleteMany({}).then(function() {
    console.log("All elements in collection deleted");
  })
  .catch(next);
})

module.exports = router;