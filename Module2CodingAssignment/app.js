(function() {
  'use strict'
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.itemList = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.itemBought = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.itemList = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var shoppingList = [
      {name: "Cookies", quantity: 10},
      {name: "Milk", quantity: 2},
      {name: "Bread", quantity: 1},
      {name: "Coffie", quantity: 3},
      {name: "Cheese", quantity: 4},
      {name: "Ham", quantity: '300g'}
    ];
    var boughtItemList = [];

    service.getItemsToBuy = function() {
      return shoppingList;
    };
    service.buyItem = function(index) {
      var boughtItem = shoppingList[index];
      shoppingList.splice(index, 1);
      boughtItemList.push(boughtItem);
    };
    service.getBoughtItems = function() {
      return boughtItemList;
    };
  };
})();
