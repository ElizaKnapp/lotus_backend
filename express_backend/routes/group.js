const express = require("express");
const router = express.Router();
//imports schema from models
const Group = require("../models/group");

// ------------------------------------ POST Requests ------------------------------------

// Adds a group to the database
router.post("/", function (req, res, next) {
  Group.create(req.body)
    .then(function (group) {
      res.send(group); // sends the message back to the client with the added data
    })
    .catch(next);
});

// ------------------------------------ GET Requests ------------------------------------

// retrieves all group information
router.get("/", async (req, res) => {
  Group.find()
    .then(function(groups) {
      res.send(groups)
    })
    .catch("*********");
});

// gets by name
router.get("/byName/:name", function (req, res, next) {
  var name = req.params.name;
  Group.find({ name: name })
    .then(function (group) {
      
      res.send(group);
    })
    .catch(next);
});

// ------------------------------------ PATCH Requests ------------------------------------

// this function allows you to change the number of members in a group
router.patch("/byName/:name", function (req, res, next) {
  // query is the roomCode you want to patch the counter to
  var name = req.params.name;
  Group.findOneAndUpdate({name: name}, {num_members: req.body.num_members})
    .then(function (group) {
      res.send(group);
    })
    .catch(next);
})

// ------------------------------------ PUT Requests ------------------------------------

// ------------------------------------ DELETE Requests ------------------------------------

// route created to delete all for testing
router.delete("/", function (req, res, next) {
  Group.deleteMany({}).then(function() {
    console.log("All elements in collection deleted");
  })
  .catch(next);
})

module.exports = router;