(function() {
    'use strict'
    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('MenuAPI', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('CategoryAPI', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')

    MenuDataService.$inject = ['$http', 'MenuAPI', 'CategoryAPI']
    function MenuDataService($http, MenuAPI, CategoryAPI) {
        var service = this;
        service.getAllCategories = function() {
            var promise = $http({
                method: 'GET',
                url: MenuAPI
            }).then(function(result) {
                return result.data;
            });
            return promise;
        };
        service.getItemsForCategory = function(categoryShortName) {
            var promise = $http({
                method: 'GET',
                url: CategoryAPI + categoryShortName
            }).then(function(result) {
                return result.data;
            });
            return promise;
        };
    };
})();
