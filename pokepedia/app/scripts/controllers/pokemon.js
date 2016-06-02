'use strict';

app.controller('PokemonListCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/pokemons'
  }).success(function(data) {
    $scope.pokemons = data;
    console.log($scope.pokemons);
  });


$scope.getPokeData = function(id){
 $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/pokemon/' + id,
  }).success(function(data) {
    $scope.pokemon = data;
    console.log($scope.pokemon);
  });
}


});

app.controller('PokemonCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/pokemon/' +$routeParams.id,
  }).success(function(data) {
    $scope.pokemon = data;
    console.log($scope.pokemon);
  });

  

});
