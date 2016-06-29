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

app.controller('PokemonStatsCtrl', function($scope, $http) {
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
    $scope.prev_evolutions = [];
    $scope.post_evolutions = [];
    $scope.sprites = new Map();
    $scope.showPrev = true;
    $scope.showPost = true;
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:3333/chain/' + $scope.species.evolution_chain.url.split('/')[$scope.species.evolution_chain.url.split('/').length-2],
    }).success(function(data) {
      $scope.chain = data;
      $scope.getChain($scope.chain.chain, false);
      for (var i = 0; i < $scope.prev_evolutions.length; i++) {
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:3333/pokemon/' + $scope.prev_evolutions[i],
        }).success(function(data) {
          var sp = data;
          $scope.sprites[sp.name] = sp.sprites.front_default;
        });
      }
      for (var i = 0; i < $scope.post_evolutions.length; i++) {
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:3333/pokemon/' + $scope.post_evolutions[i],
        }).success(function(data) {
          var sp = data;
          $scope.sprites[sp.name] = sp.sprites.front_default;
        });
      }
      if($scope.prev_evolutions.length==1)
        $scope.showPrev = false;
      if ($scope.post_evolutions.length==0) 
        $scope.showPost = false;
    });
  });

  $scope.getChain = function(chain, post){
    console.log(post);
    if(post){
      $scope.post_evolutions.push(chain.species.name);
      console.log($scope.post_evolutions);
    }
    else{
      $scope.prev_evolutions.push(chain.species.name);
      console.log($scope.prev_evolutions);
      if(chain.species.name==$scope.pokemon.name)
        post=true;
    }
    if(chain.evolves_to.length!=0){
      $scope.getChain(chain.evolves_to[0], post);
    }
  }
});
