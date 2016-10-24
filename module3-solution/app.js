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
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = "";
  ctrl.found = [];
  ctrl.title = "What are you searching for?";

  ctrl.narrowItems = function() {
    var promise = MenuSearchService
    .getMatchedMenuItems(ctrl.searchTerm);

    promise.then( function(response) {
      ctrl.title = "Searching for " + ctrl.searchTerm;
      ctrl.found = response;
    })
  };

  ctrl.removeItem = function(index) {
    ctrl.found.splice(index, 1);
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
