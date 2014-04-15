'use strict';

/* Controllers */

angular.module('InfotecApp.controllers', [])
  .controller('TracksController', ['$scope','trackService', function($scope,trackService) {
		$scope.tracks = [];
		trackService.getTracks()
			.success(function(data){ 
				$scope.tracks = data.entries;
			})
			.error(function(){ 
				alert("getTracks error")
			});
  }])
	.controller('SessionsController', ['$scope', '$routeParams', 'trackService', function($scope, $routeParams, trackService) {
		$scope.sessions = {};
		trackService.getSessions($routeParams.id)
			.success(function(data){ 
				$scope.sessions = data.entries;
			})
			.error(function(){ 
				alert("getSessions error")
			});
  }]);
