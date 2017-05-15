//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var db = require('./modules/db');
var movieRoutes = require('./routes/route');


//port
var port = process.env.PORT || 3021;

// var movieSchema = mongoose.Schema({
//   title: String,
//   year: Number,
//   rating: String,
//   poster: String,
//   plot: String,
//   Genre: String
// });

// var movies = mongoose.model( 'movies', movieSchema );


//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/addMovie', movieRoutes);
app.use('/displayFav', movieRoutes);


//spin server
app.listen(port, function(){
  console.log('server up on:', port);
});//end server

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html') );
});


app.post('/favorites', function ( req, res ){
  console.log(req.body);
  var addMovie = movies(req.body);
  addMovie.save().then(function(){
    res.sendStatus( 200 );
  });//saving
});//posting
