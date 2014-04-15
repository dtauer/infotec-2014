'use strict';

angular.module('InfotecApp.services', [])
  .factory('trackService', ['$http',function($http) {
    
		//Both of these service functions are called from the controllers.
		//The pull data from a URL and return it to the controller to use.
		
		return {
			
			getTracks: function(){
				var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=sequence_number&query[orderBy][]=track_name&query[includeOnlyColumns][track_name]=track_name&query[includeOnlyColumns][track_oid]=track_oid";
				return $http.get(url);
			},
			
			getSessions: function(trackID){
				var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=start_datetime&query[orderBy][]=activity_name&query[whereEqualsAlpha][track_oid]=" + trackID + "&query[includeExtraColumns][in_minute]=MINUTE(start_datetime)&query[includeExtraColumns][in_hour]=HOUR(start_datetime)&query[includeExtraColumns][in_date]=DATE(start_datetime)&query[includeExtraColumns][in_day_of_week]=DAYOFWEEK(start_datetime)&query[includeExtraColumns][in_month]=MONTH(start_datetime)&query[includeExtraColumns][in_day]=DAY(start_datetime)";
				return $http.get(url);
				
			}
			
		}; // end trackService
  }]);
