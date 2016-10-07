(function() {
    'use strict'

    angular.module('MenuApp')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['items'];
    function MenuCtrl(items) {
        var ctrl = this;
        ctrl.categories = items;
    };
})();
