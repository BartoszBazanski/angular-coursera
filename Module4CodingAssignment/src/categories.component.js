(function() {
    'use strict'

    angular.module('Data')
        .component('categories', {
            templateUrl: './partials/categories-component-tmpl.html',
            bindings: {
                categories: '<'
            }
        });
})();
