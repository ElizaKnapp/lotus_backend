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
    .catch("*********");
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

// should allow you to update with new user info
router.patch("/byUsername/:username", function (req, res, next) {
  UserInfo.findOneAndUpdate({username: req.params.username}, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday, 
    gender: req.body.gender,
    profile_visibility: req.body.profile_visibility,
    location: req.body.location,
    flagged: req.body.flagged
  })
    .then(function (post) {
      res.send(post);
    })
    .catch(next);
})

// ------------------------------------ PUT Requests ------------------------------------

// adds a group based on username
router.put("/byUsername/addGroup/:username", function (req, res, next) {
  var username = req.params.username;
  var name = req.body.groups.name;

  UserInfo.findOneAndUpdate({ username: username }, { $push: { groups: {name: name} } })
    .then(function () {
      UserInfo.find({ username: username }).then(function (user) {
        res.send(user);
      });
    })
    .catch(next);
});

// adds an interest based on username
router.put("/byUsername/addInterest/:username", function (req, res, next) {
  var username = req.params.username;
  var interest = req.body.interests.interest;

  UserInfo.findOneAndUpdate({ username: username }, { $push: { interests: {interest: interest} } })
    .then(function () {
      UserInfo.find({ username: username }).then(function (user) {
        res.send(user);
      });
    })
    .catch(next);
});


// removes group from the array when you leave
router.put("/removeGroup/:username", function (req, res, next) {
  var username = req.params.username;
  var name = req.body.groups.name;

  UserInfo.findOneAndUpdate({ username: username }, { $pull: { groups: {name: name} } })
    .then(function () {
      UserInfo.find({ username: username }).then(function (user) {
        res.send(user);
      });
    })
    .catch(next);
});

// ------------------------------------ DELETE Requests ------------------------------------

// route created to delete all for testing
router.delete("/", function (req, res, next) {
  UserInfo.deleteMany({}).then(function() {
    console.log("All elements in collection deleted");
  })
  .catch(next);
})

module.exports = router;