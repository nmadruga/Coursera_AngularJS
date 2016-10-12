(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', '$stateParams'];
function ItemsController(MenuDataService, $stateParams) {
  var itemCtrl = this;
  itemCtrl.items = [];

  itemCtrl.$onInit = function () {
    MenuDataService.getItemsForCategory($stateParams.catId)
    .then(function (result) {
    	console.log(result.data.menu_items);
      itemCtrl.items = result.data.menu_items;
    });
  };
}

})();