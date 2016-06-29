'use strict';

/**
 * @ngdoc overview
 * @name pokepediaApp
 * @description
 * # pokepediaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('pokepediaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angularUtils.directives.dirPagination',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/pokemon', {
        templateUrl: 'views/pokemon.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
