(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserService'];
function SignupController(MenuService, UserService) {
  var ctrl = this;
  ctrl.finished = false;

  ctrl.submit = function (valid) {

  	if( valid )
  	{
  		MenuService.getItem( ctrl.user.short_name)
  		.then(function successCallback(response) {
  			UserService.addInfo( ctrl.user.firstname, ctrl.user.lastname,
  								           ctrl.user.email, ctrl.user.phone, 
                             ctrl.user.short_name, response.data.name,
                             response.data.special_instructions );
		    ctrl.ItemFound = true;
		    ctrl.finished = true;
		  }, function errorCallback(response) {
		  	ctrl.ItemFound = false;
		    ctrl.finished = false;
		  });
  	}
  };
}

})();