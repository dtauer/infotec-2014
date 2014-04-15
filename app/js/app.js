'use strict';


// Declare app level module which depends on filters, and services
angular.module('InfotecApp', [
  'ngRoute',
  'InfotecApp.services',
  'InfotecApp.controllers',
	'InfotecApp.directives'
])
.config(['$routeProvider', function($routeProvider) {
	//Setting up the routes (urls)
	// When it's the home page (/), use the tracks-partial and TracksController
	// When we are viewing a track (/track/1234), use the sessions partial and SessionsControler
  $routeProvider.when('/', {templateUrl: 'partials/tracks-partial.html', controller: 'TracksController'})
								.when('/track/:id', {templateUrl: 'partials/sessions-partial.html', controller: 'SessionsController'});
}]);
