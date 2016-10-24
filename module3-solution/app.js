(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '=',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;

  // list.cookiesInList = function () {
  //   for (var i = 0; i < list.items.length; i++) {
  //     var name = list.items[i].name;
  //     if (name.toLowerCase().indexOf("cookie") !== -1) {
  //       return true;
  //     }
  //   }

  //   return false;
  // };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";
  list.found = [];
  list.title = "What are you searching for?";

  list.narrowItems = function() {
    var promise = MenuSearchService
    .getMatchedMenuItems(list.searchTerm);

    promise.then( function(response) {
      list.title = "Searching for " + list.searchTerm;
      list.found = response;
    })
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
      for( var i=0; i<allItems.length; i++ ) {
        var description = allItems[i].description;
        if( description.match(searchTerm) ) {
          foundItems.push( allItems[i] );
        }
      }
      return foundItems;
    });
  } 
}

})();
