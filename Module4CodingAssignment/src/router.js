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
                    items: ['MenuService', function(MenuService) {
                        return MenuService.fetchMenu();
                    }]
                }
            })
            .state('category', {
                url: '/category/{categoryId}',
                templateUrl: './partials/categories-items-tmpl.html',
                controller: 'CategoryCtrl as category',
                resolve: {
                    category: ['$stateParams', 'MenuService', function($stateParams, MenuService) {
                        return MenuService.fetchMenu().then(function(result) {
                            var menuCategory = result[$stateParams.categoryId];
                            return MenuService.fetchCategory(menuCategory.url).then(function(result) {
                                return result;
                            })
                        })
                }]}
            });
    };
})();
