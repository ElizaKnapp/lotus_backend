const express = require("express");
const router = express.Router();
//imports schema from models
const User = require("../models/user");

// ------------------------------------ POST Requests ------------------------------------

// Adds a user to the database
router.post("/", function (req, res, next) {
  User.create(req.body)
    .then(function (user) {
      res.send(user); // sends the message back to the client with the added data
    })
    .catch(next);
});

// ------------------------------------ GET Requests ------------------------------------

// retrieves all user information
router.get("/", async (req, res) => {
  User.find()
    .then(function(users) {
      res.send(users)
    })
    .catch("*********");
});

// gets by username
router.get("/byUsername/:username", function (req, res, next) {
  var username = req.params.username;
  User.find({ username: username })
    .then(function (user) {
      
      res.send(user);
    })
    .catch(next);
});

// gets by email
router.get("/byEmail/:email", function (req, res, next) {
  var email = req.params.email;
  User.find({ email: email })
    .then(function (user) {
      
      res.send(user);
    })
    .catch(next);
});

// ------------------------------------ PATCH Requests ------------------------------------

// ------------------------------------ PUT Requests ------------------------------------

// ------------------------------------ DELETE Requests ------------------------------------

// route created to delete all for testing
router.delete("/", function (req, res, next) {
  User.deleteMany({}).then(function() {
    console.log("All elements in collection deleted");
  })
  .catch(next);
})

// delete by specific username
router.delete("/byUsername/:username", function (req, res, next) {
  var username = req.params.username;
  User.deleteMany({ username: username })
    .then(function () {
      console.log(username + " deleted")
    })
    .catch(next);
});

module.exports = router;