omdbApp.service('SearchingForMovie', function($http){

  this.searchingForMovie = function(flickas){

    console.log('in searchingForMovie');


    return $http({
      method: 'GET',
      url: "http://www.omdbapi.com/?s=" + flickas
    }).then( function ( response ) {

      console.log( 'response in Search:', response );
      console.log( 'response.data.Search:', response.data.Search );

      var results = response.data.Search;

      console.log( 'results:', results );

      return results;
    });

  };//SearchingForMovie
});//Service
