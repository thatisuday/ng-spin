// run
angular
.module('thatisuday.ng-spin')
.run(['$document', function($document){
	if($document.find('ng-spin').length == 0){
		$document.find('body').append('<ng-spin></ng-spin>');
	}
}])
;