(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath', 'UserService'];
function MyInfoController(ApiPath, UserService) {
  var ctrl = this;
  ctrl.user = null;

  ctrl.hasUser = function () {
    ctrl.user = UserService.getUser();
    return ctrl.user;
  };

  ctrl.getImageUrl = function () {
    return ApiPath + '/images/' + ctrl.user.item + '.jpg';
  }
}

})();