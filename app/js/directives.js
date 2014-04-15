'use strict';

/* Directives */


angular.module('InfotecApp.directives', [])
  .directive('sessionInfo', [function() {
    return {
			restrict: "E",
			templateUrl: "partials/session-info-partial.html",
			controller: function(){
				//internal logic here...
			}
		};
		
  }]);
