(function() {
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDctv);
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        var promise = MenuSearchService.getMatchedMenuItems;
        narrow.itDown = function() {
            promise(narrow.search).then(function(foundItems) {
                narrow.found = foundItems;
            })
            .catch(function(error) {
                console.log("Something went terribly wrong.");
            })
        }
        narrow.removeItem = function(index) {
            narrow.found.splice(index, 1);
        }
    }
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        var list = [];
        service.getMatchedMenuItems = function(searchTerm) {
            var promise = $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function(responce) {
                var foundItems = responce.data.menu_items;
                foundItems = foundItems.filter(function(item) {
                    return (item.description.indexOf(searchTerm) >= 0);
                });
                list = foundItems;
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
                foundItems: '<',
                onRemove: '&'
            },
            controller: function() {
                var list = this;
            },
            controllerAs: 'list',
            bindToController: true
        }
        return ddo;
    }
})();
