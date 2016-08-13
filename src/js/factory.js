// factory
angular
.module('thatisuday.ng-spin')
.factory('$ngSpin', ['$rootScope', '$http', function($rootScope, $http){
	return {
		start : function(){
			$rootScope.$emit('$ngSpinStart');
		},

		stop : function(){
			$rootScope.$emit('$ngSpinStop');
		}
	}
}]);