(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {

  var service = this;

  // service.getAllCategories = function() {
  service.getItems = function () {
    return $http.get("https://davids-restaurant.herokuapp.com/categories.json");
  };

  service.getItemsForCategory = function(shortCategoryName) {
    console.log( "shortName:", shortCategoryName );
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json",
      {
        params: { category: shortCategoryName}
      });
  };
}

})();
