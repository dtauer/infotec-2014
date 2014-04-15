'use strict';

/* Directives */


angular.module('InfotecApp.directives', [])
  .directive('sessionInfo', [function() {  
		//the name "sessionInfo" will be used in the HTML like <session-info>
    return {
			restrict: "E",  //restrict controlls how it will be used (see note below)
			templateUrl: "partials/session-info-partial.html",
			controller: function(){
				//internal logic here...
			}
		};
		
  }]);
	
//Restrict:

//  E -> Element: <session-info>
//  A -> Attribute: <div session-info="something"></div>
