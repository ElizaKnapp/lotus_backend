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
    .catch(next);
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

module.exports = router;