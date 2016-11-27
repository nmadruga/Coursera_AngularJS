(function () {

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var ctrl = this;

  ctrl.submit = function () {
    ctrl.completed = true;
  };
}

})();