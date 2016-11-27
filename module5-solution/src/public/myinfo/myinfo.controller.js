(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'UserService'];
function MyInfoController(MenuService, UserService) {
  var ctrl = this;
  ctrl.user = null;

  ctrl.hasUser = function () {
    ctrl.user = UserService.getUser();
    return ctrl.user;
  };
}

})();