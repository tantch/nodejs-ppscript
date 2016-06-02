'use strict';

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/pokemon', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


