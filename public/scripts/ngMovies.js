var omdbApp =angular.module( 'omdbApp', ['ngRoute']);

//requires ngRoute to be Installed
//adds new route definition to $route service
omdbApp.config(function($routeProvider){});

//set up a controller
omdbApp.controller( 'CinemaController',function($http, SearchingForMovie){
    console.log('hit CinemaController');
var vm = this;
// vm.items = [];

vm.searchMovies = function(flickas) {
  SearchingForMovie.searchingForMovie(flickas).then(function(data){
    console.log('in function return: ', data);
    vm.result = data;
  });//.then
};//submit

// vm.searchMovies = function (){
//
  // vm.favoriteMovies = [];
  // vm.addToFavorites = function(movie)
  //
  // {
  //   console.log('movie');
  //   vm.favoriteMovies.push(movie);
  // };

  vm.addToFavorites = function (Title, Poster, Year){
    console.log('favorite button clicked');
    var objectToSend = {
      title: vm.movie.Title,
      imdbID: vm.movie.imdbID,
      year: vm.movie.Year,
      plot: vm.movie.Poster
    };// objecyToSend
    console.log('objectToSend>>>', ObjectToSend);
    $http({
      method: 'POST',
      url: '/createMovie',
      data: ObjectToSend
    }).then(function(response){
      console.log('back from server:', response);
    });//then
  };//post



      vm.removeFavoriteMovie = function (movie)
{
  var index = vm.favoriteMovies.indexOf(movie);
              vm.favoriteMovies.splice(index,1);
};

  var movies = [
    {title: "Avatar", year: 2009, plot: "come cool blue people" },
    {title: "Star Wars", year: 2005, plot: "Luke, I Am your Father" },
    {title: "Star Trek", year: 2013, plot: "James T Kirk Laying Pipe Every Episode" }

  ];


  vm.movies = movies;

  vm.createMovie = function()
  {
  alert(vm.movie);
  var newMovie = {
    Title: vm.movie.Title,
    rating: vm.movie.Rating,
    year: vm.movie.Year,
    plot: vm.movie.Plot,
    genre: vm.movie.Genre
  };
  vm.movies.push(newMovie);
  };

  vm.removeMovie = function (movie)
  {
    console.log("remove movie");
    console.log(movie);

    var index = vm.movies.indexOf(movie);
    console.log(index);
    vm.movies.splice(index, 1);

  }; // end remove movie



  vm.selectMovie = function(movie)
  {
    vm.movie = movie;

  };
  vm.updateMovie = function()
  {
    alert(vm.movie.Title);
  };


  vm.removeFavoriteMovie = function(movie)
  {
    var index = vm.favoriteMovies.indexOf(movie);
    vm.favoriteMovies.splice(index, 1);
  };


});// end CinemaController
