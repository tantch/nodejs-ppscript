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

  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/species/' +$routeParams.id,
  }).success(function(data) {
    $scope.species = data;
    $scope.evolutions = [];
    $scope.sprites = new Map();
    $scope.index = [];
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:3333/chain/' + $scope.species.evolution_chain.url.split('/')[$scope.species.evolution_chain.url.split('/').length-2],
    }).success(function(data) {
      $scope.chain = data;
      $scope.getChain($scope.chain.chain);
      for (var i = 0; i < $scope.evolutions.length; i++) {
        $scope.index.push(i);
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:3333/pokemon/' + $scope.evolutions[i],
        }).success(function(data) {
          var sp = data;
          $scope.sprites[sp.name] = sp.sprites.front_default;
        });
      }
    });
  });

  $scope.getChain = function(chain){
    $scope.evolutions.push(chain.species.name);
    if(chain.evolves_to.length!=0){
      $scope.getChain(chain.evolves_to[0]);
    }
  }
});
