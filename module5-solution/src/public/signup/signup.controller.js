(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var ctrl = this;
  ctrl.finished = false;

  ctrl.submit = function (valid) {

  	if( valid )
  	{
  		console.log( ctrl.user.short_name );
  		MenuService.getItem( ctrl.user.short_name)
  		.then(function successCallback(response) {
  			console.log("Found");
  			ctrl.ItemFound = true;
		    ctrl.finished = true;
		  }, function errorCallback(response) {
		  	console.log("Not found");
		  	ctrl.ItemFound = false;
		    ctrl.finished = true;
		  });
  	}
  };
}

})();