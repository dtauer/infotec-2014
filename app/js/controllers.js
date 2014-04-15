'use strict';

/* Controllers */

angular.module('InfotecApp.controllers', [])
  .controller('TracksController', ['$scope','trackService', function($scope,trackService) {
		
		//This controler runs the list of tracks (home page). It imports the $scope variable and the trackService above
		//Those imports ask Angular to make those libraries available for this controller
		
		$scope.tracks = [];  //This variable populates the list of tracks in the view
		//Call the track service (in the services.js file)
		trackService.getTracks()
			.success(function(data){ 
				$scope.tracks = data.entries; //If we get a successful return, populate our array
			})
			.error(function(){ 
				alert("getTracks error")
			});
  }])
	.controller('SessionsController', ['$scope', '$routeParams', 'trackService', function($scope, $routeParams, trackService) {
		
		//This controller works the same way as the tracks controller but instead controlls the sessions.
		//The only difference is it uses the $routeParam library to get access to the ID in the URL
		
		$scope.sessions = {};
		trackService.getSessions($routeParams.id)  //pass the id from the URL to the service
			.success(function(data){ 
				$scope.sessions = data.entries;  // populate the sessions array to show the sessions for this track
			})
			.error(function(){ 
				alert("getSessions error")
			});
  }]);
