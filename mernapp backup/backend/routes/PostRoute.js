const express = require('express');

const PostRoute = express.Router();   // create an instance of React Router
// Require Post model in our routes module
let Post = require('../models/Post');

// Defined Post route
PostRoute.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
    res.status(200).json(post);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route

PostRoute.route('/').get(function (req, res) {
Post.find(function (err, posts){
    if(err){
      console.log(err);
    }
    else {
      res.json(posts);
    }
  });
});
module.exports = PostRoute;