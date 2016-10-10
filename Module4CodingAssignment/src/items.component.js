(function() {
    'use strict'

    angular.module('Data')
        .component('itemsList', {
            templateUrl: './partials/item-list-component-tmpl.html',
            bindings: {
                items: '<'
            }
        });
})();
