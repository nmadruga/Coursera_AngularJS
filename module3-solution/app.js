(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);
// .factory('ShoppingListFactory', ShoppingListFactory)
// .directive('shoppingList', ShoppingListDirective);


// function ShoppingListDirective() {
//   var ddo = {
//     templateUrl: 'shoppingList.html',
//     scope: {
//       items: '<',
//       myTitle: '@title',
//       badRemove: '=',
//       onRemove: '&'
//     },
//     controller: ShoppingListDirectiveController,
//     controllerAs: 'list',
//     bindToController: true
//   };

//   return ddo;
// }


// function ShoppingListDirectiveController() {
//   var list = this;

//   list.cookiesInList = function () {
//     for (var i = 0; i < list.items.length; i++) {
//       var name = list.items[i].name;
//       if (name.toLowerCase().indexOf("cookie") !== -1) {
//         return true;
//       }
//     }

//     return false;
//   };
// }


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";
  list.found = [];

  list.narrowItems = function() {
    list.found = MenuSearchService
    .getMatchedMenuItems(list.searchTerm);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
    .then( function (result) {
      var foundItems = [];
      var allItems = result.data.menu_items;
      for( var i=0; i<allItems.length; i++ )
      {
        var description = allItems[i].description;
        if( description.match(searchTerm) ) {
          foundItems = allItems[i];
          console.log("Item added! ", i);
        }
      }

      return foundItems;
    });
  } 
}

})();
