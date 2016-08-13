// module
angular.module('thatisuday.ng-spin', []);

// directive
angular
.module('thatisuday.ng-spin')
.directive('ngSpin', ['$rootScope', 'ngSpinOps', function($rootScope, ngSpinOps){
	return {
		replace : true,
		template : '<div class="ng-spin" ng-if="isOn"></div>',
		scope : {},
		compile : function(tElem, tAttr){

			// add spinner class
			tElem.addClass('ng-spin-' + ngSpinOps.spinner);
			
			// add size class
			tElem.addClass('ng-spin-size-' + ngSpinOps.size);
			tElem.addClass('ng-spin-position-' + ngSpinOps.position);

			/**********************************************************/

			// create template (based on spinner)
			// add style
			if(ngSpinOps.spinner == 'ping'){
				tElem.css({'background-color' : ngSpinOps.color});
			}
			else if(ngSpinOps.spinner == 'plane'){
				tElem.css({'background-color' : ngSpinOps.color});
			}
			else if(ngSpinOps.spinner == 'big-bang'){
				tElem.append(
					'<div class="double-bounce1" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="double-bounce2" style="background-color:' + ngSpinOps.color + ';"></div>'
				);
			}
			else if(ngSpinOps.spinner == 'bars'){
				tElem.append(
					'<div class="rect1" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="rect2" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="rect3" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="rect4" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="rect5" style="background-color:' + ngSpinOps.color + ';"></div>'
				);
			}
			else if(ngSpinOps.spinner == 'cubes'){
				tElem.append(
					'<div class="cube1" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="cube2" style="background-color:' + ngSpinOps.color + ';">'
				);
			}
			else if(ngSpinOps.spinner == 'binary'){
				tElem.append(
					'<div class="dot1" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="dot2" style="background-color:' + ngSpinOps.color + ';">'
				);
			}
			else if(ngSpinOps.spinner == 'sos'){
				tElem.append(
					'<div class="bounce1" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="bounce2" style="background-color:' + ngSpinOps.color + ';"></div>'+
					'<div class="bounce3" style="background-color:' + ngSpinOps.color + ';"></div>'
				);
			}
			else if(ngSpinOps.spinner == 'worm'){
				tElem.append(
					'<div class="sk-circle1 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle2 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle3 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle4 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle5 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle6 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle7 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle8 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle9 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle10 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle11 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle12 sk-child"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'
					);
			}
			else if(ngSpinOps.spinner == 'snake'){
				tElem.append(
					'<div class="sk-circle1 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle2 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle3 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle4 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle5 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle6 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle7 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle8 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle9 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle10 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle11 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-circle12 sk-circle"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'
				);
			}
			else if(ngSpinOps.spinner == 'flipboard'){
				tElem.append(
					'<div class="sk-cube1 sk-cube"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-cube2 sk-cube"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-cube4 sk-cube"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'+
					'<div class="sk-cube3 sk-cube"><span style="background-color:' + ngSpinOps.color + ';"></span></div>'
				);
			}

			/**********************************************************/

			// link
			return function($scope, elem, attr){
				// wrap if blocking spinner
				if(ngSpinOps.blocking){
					elem.wrap(
						'<div class="ng-spin-overlay ng-spin-overlay-bg-' + ngSpinOps.blocking + '"></div>'
					);
				}

				// start/stop switcher
				$scope.isOn = false;
				
				// listen to $ngSpinStart event
				$rootScope.$on('$ngSpinStart', function(){
					$scope.isOn = true;
				});

				// listen to $ngSpinStop event
				$rootScope.$on('$ngSpinStop', function(){
					$scope.isOn = false;
				});
			}
		}
	}
}]);

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

// provider
angular
.module('thatisuday.ng-spin')
.provider('ngSpinOps', function(){
	var defOps = {
		autoGlobal : false,
		spinner : 'big-bang',
		size : 'normal',
		color : '#333',
		position : 'right-top',
		blocking : false,
		delay : 0,
		extend : 100
	};

	return {
		setOps : function(newOps){
			angular.extend(defOps, newOps);
		},
		$get : function(){
			return defOps;
		}
	}
});

// run
angular
.module('thatisuday.ng-spin')
.run(['$document', function($document){
	if($document.find('ng-spin').length == 0){
		$document.find('body').append('<ng-spin></ng-spin>');
	}
}])
;