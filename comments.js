// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET comments
router.get('/', function(req, res, next) {
  // Use mongoose to get all comments in the database
  Comment.find(function(err, comments) {
    // If there is an error, send the error
    if (err) {
      res.send(err);
    }
    // Otherwise, send the comments
    else {
      res.json(comments);
    }
  });
});

// POST comments
router.post('/', function(req, res, next) {
  // Create a new comment
  var newComment = new Comment({
    text: req.body.text,