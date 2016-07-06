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

app.controller('StatsCtrl', function($scope, $http) {
  $scope.colors = new Map();
  $scope.color_labels = [];
  $scope.color_values = [];
  $scope.habitats = new Map();
  $scope.habitats_labels = [];
  $scope.habitats_values = [];
  $scope.shapes = new Map();
  $scope.shapes_labels = [];
  $scope.shapes_values = [];

  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/colors',
  }).success(function(data) {
    $scope.cols = data;
    for (var i = 1; i < data.count+1; i++) {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3333/color/' + i,
      }).success(function(data) {
        $scope.color_labels.push($scope.cols.results[data.id-1].name);
        $scope.color_values.push(data.pokemon_species.length);
        $scope.colors[$scope.cols.results[data.id-1].name] = data.pokemon_species;
        $scope.background_colors["#000000","#0040FF","#3B0B0B","#424242","#298A08","#DF01A5","#6A0888","#FF0000","#FFFFFF","#FFFF00"];
        console.log($scope.color_values);
      });
    }
  });


  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/habitats',
  }).success(function(data) {
    $scope.hab = data;
    for (var i = 1; i < data.count+1; i++) {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3333/habitat/' + i,
      }).success(function(data) {
        $scope.habitats_labels.push($scope.hab.results[data.id-1].name);
        $scope.habitats_values.push(data.pokemon_species.length);
        $scope.habitats[$scope.hab.results[data.id-1].name] = data.pokemon_species;
        console.log($scope.habitats_values);
      });
    }
  });
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/shape',
  }).success(function(data) {
    $scope.sha = data;
    for (var i = 1; i < data.count+1; i++) {
      $http({
        method: 'GET',
        url: 'http://127.0.0.1:3333/shape/' + i,
      }).success(function(data) {
        $scope.shapes_labels.push($scope.sha.results[data.id-1].name);
        $scope.shapes_values.push(data.pokemon_species.length);
        $scope.shapes[$scope.sha.results[data.id-1].name] = data.pokemon_species;
        console.log($scope.shapes_values);
      });
    }
  });
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/species',
  }).success(function(data) {
    $scope.species = data;
  });
  $http({
    method: 'GET',
    url: 'http://127.0.0.1:3333/forms',
  }).success(function(data) {
    $scope.forms = data;
  });
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
