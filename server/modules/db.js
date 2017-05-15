var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/movietheatre';

var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

// The final "once open" function lets us know when it's connected
MongoDB.once('open', function () {
  console.log('mongodbase connection open!');
});

// exports MongoDB inorder to be use/called on
module.exports = MongoDB;
