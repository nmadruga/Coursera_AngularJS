(function (){
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('ShoppingListService', ShoppingListService );

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController( ShoppingListService ){
	var toBuy = this;
	toBuy.items = ShoppingListService.getBuyItems();
	toBuy.check = function( index ){
		ShoppingListService.addBoughtItem( index );
	}
	toBuy.empty = function() {
		return toBuy.items.length == 0;
	}
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController( ShoppingListService ){
	var bought = this;
	bought.items = ShoppingListService.getBoughtItems();
	bought.empty = function() {
		return bought.items.length == 0;
	}
}

function ShoppingListService() {
	var service = this;
	var buyItems = [ { name: "cookies", quantity: 10 },
					 { name: "chocolate", quantity: 3 },
					 { name: "milk", quantity: 5 },
					 { name: "soda", quantity: 1 },
					 { name: "mate", quantity: 3 },
					 { name: "ice cream", quantity: 7 } ];
	var boughtItems = [];

	service.getBuyItems = function() {
		return buyItems;
	}

	service.getBoughtItems = function() {
		return boughtItems;
	}

	service.addBoughtItem = function( index ) {
		var item = buyItems[index];
		buyItems.splice( index, 1 );
		boughtItems.push( item );
	}
}

})();