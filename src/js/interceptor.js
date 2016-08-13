// http interceptor
angular
.module('thatisuday.ng-spin')
.config(['$httpProvider', function($httpProvider){
	$httpProvider
	.interceptors
	.push(['$rootScope', 'ngSpinOps', function($rootScope, ngSpinOps){
		return {
			'request' : function(request){
				if(request.ngSpin || ngSpinOps.autoGlobal){
					$rootScope.$emit('$ngSpinStart');
				}

				return request;
			},
			'response' : function(response){
				if(response.config.ngSpin || ngSpinOps.autoGlobal){
					$rootScope.$emit('$ngSpinStop');
				}

				return response;
			}
		}
	}]);
}]);