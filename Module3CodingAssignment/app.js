(function() {
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDctv);
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.itDown = function() {
            MenuSearchService.getMatchedMenuItems(narrow.search).then(function(foundItems) {
                narrow.found = foundItems;
            });
        }
    }
    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            var promise = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function(responce) {
                var foundItems = responce.data.menu_items;
                foundItems = foundItems.filter(function(item) {
                    if(item.description.indexOf(searchTerm) >= 0) {
                        console.log(item.description);
                    }
                    return (item.description.indexOf(searchTerm) >= 0);
                });
                console.log(foundItems);
                return foundItems;
            });
            return promise;
        }
    }
    function FoundItemsDctv() {
        var ddo = {
            restrict: 'E',
            templateUrl: './found_items/found_items_tmpl.html',
            scope: {
                foundItems: '<'
            }
        }
        return ddo;
    }
})();
