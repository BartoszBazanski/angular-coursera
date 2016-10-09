(function() {
    'use strict'

    angular.module('MenuApp')
        .controller('CategoryCtrl', CategoryCtrl);

    CategoryCtrl.$inject = ['category']
    function CategoryCtrl(category) {
        var ctrl = this;
        console.log(category);
        ctrl.name = category.category.name;
        ctrl.items = category.menu_items;
    };
})();
