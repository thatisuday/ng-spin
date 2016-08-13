// http interceptor
angular
.module('thatisuday.ng-spin')
.config(['$httpProvider', function($httpProvider){
	$httpProvider
	.interceptors
	.push(['$rootScope', '$timeout', '$q', 'ngSpinOps', function($rootScope, $timeout, $q, ngSpinOps){
		return {
			'request' : function(request){
				if(request.ngSpin || ngSpinOps.autoGlobal){
					$timeout(function(){
						$rootScope.$emit('$ngSpinStart');
					}, ngSpinOps.delay);
				}

				return request;
			},
			'requestError': function(request) {
				if(request.ngSpin || ngSpinOps.autoGlobal){
					$timeout(function(){
						$rootScope.$emit('$ngSpinStop');
					}, ngSpinOps.extend);
				}

				return $q.reject(request);
			},
			'response' : function(response){
				if(response.config.ngSpin || ngSpinOps.autoGlobal){
					$timeout(function(){
						$rootScope.$emit('$ngSpinStop');
					}, ngSpinOps.extend);
				}

				return response;
			},
			'responseError' : function(response){
				if(response.config.ngSpin || ngSpinOps.autoGlobal){
					$timeout(function(){
						$rootScope.$emit('$ngSpinStop');
					}, ngSpinOps.extend);
				}

				return $q.reject(response);
			}
		}
	}]);
}]);