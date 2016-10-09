(function() {
    'use strict'
    angular.module('MenuApp')
        .config(Routing);

    Routing.$inject = ['$stateProvider', '$urlRouterProvider']
    function Routing($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './partials/home-tmpl.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: './partials/categories-tmpl.html',
                controller: 'MenuCtrl as ctrl',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('category', {
                url: '/category/{categoryId}',
                templateUrl: './partials/categories-items-tmpl.html',
                controller: 'CategoryCtrl as category',
                resolve: {
                    category: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                }]}
            });
    };
})();
