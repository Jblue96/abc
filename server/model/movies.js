// requires
var express = require('express');
var mongoose = require('mongoose');

// schema
var movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  rating: String,
  poster: String,
  plot: String,
  Genre: String
});// schema

// model
var flix = mongoose.model('flix', movieSchema);

module.exports = {
  flix: flix,
  movieSchema: movieSchema
};
