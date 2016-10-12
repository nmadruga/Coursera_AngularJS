(function () {
'use strict';

angular.module('MenuApp')
.component('list', {
  templateUrl: 'src/shoppinglist/templates/list.template.html',
  bindings: {
    items: '<'
  }
});

})();
