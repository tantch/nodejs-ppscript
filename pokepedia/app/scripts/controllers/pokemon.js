'use strict';

app.controller('PokemonCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/pokemons/1'
  }).success(function(data) {
    $scope.pokemons = data;
    console.log($scope.pokemons);
  });

});
