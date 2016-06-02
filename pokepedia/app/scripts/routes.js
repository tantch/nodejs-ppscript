'use strict';

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/pokedex', {
        templateUrl: 'views/pokedex.html',
        controller: 'PokemonListCtrl'
      })
      .when('/pokemon/:id', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


