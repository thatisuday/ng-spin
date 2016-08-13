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