const express = require("express");
const router = express.Router();
//imports schema from models
const UserInfo = require("../models/userInfo");

// ------------------------------------ POST Requests ------------------------------------

// Adds a user to the database
router.post("/", function (req, res, next) {
  UserInfo.create(req.body)
    .then(function (userInfo) {
      res.send(userInfo); // sends the message back to the client with the added data
    })
    .catch(next);
});

// ------------------------------------ GET Requests ------------------------------------

// retrieves all user information
router.get("/", async (req, res) => {
  UserInfo.find()
    .then(function(users) {
      res.send(users)
    })
    .catch(next);
});

// gets by username
router.get("/byUsername/:username", function (req, res, next) {
  var username = req.params.username;
  UserInfo.find({ username: username })
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
  UserInfo.deleteMany({}).then(function() {
    console.log("All elements in collection deleted");
  })
  .catch(next);
})

module.exports = router;