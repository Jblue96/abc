// requires
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var movieModel = require('../model/movies');

// GET
router.get('/', function(req, res){
  console.log('get call');
  movieModel.movies.find().then(function(data){
    console.log('data:', data);
    res.send(data);
  });
});// end GET

// POST
router.post('/', function(req, res){
  console.log('post call');
  console.log('req.body', req.body);
  var newMovies = movieModel.films(req.body);
  newMovies.save().then(function(){
    res.sendStatus(200);
  });
});// end post

// exports
module.exports = router;
