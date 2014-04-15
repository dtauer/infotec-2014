'use strict';


// Declare app level module which depends on filters, and services
angular.module('InfotecApp', [
  'ngRoute',
  'InfotecApp.services',
  'InfotecApp.controllers',
	'InfotecApp.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/tracks-partial.html', controller: 'TracksController'})
								.when('/track/:id', {templateUrl: 'partials/sessions-partial.html', controller: 'SessionsController'});
}]);
