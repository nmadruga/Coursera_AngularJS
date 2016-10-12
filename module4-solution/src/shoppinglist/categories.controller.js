(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var catCtrl = this;
  catCtrl.items = [];

  catCtrl.$onInit = function () {
    MenuDataService.getItems()
    .then(function (result) {
      catCtrl.items = result.data;
    });
  };
}

})();
