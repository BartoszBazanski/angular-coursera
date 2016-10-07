(function() {
    'use strict'

    angular.module('MenuApp')
        .controller('CategoryCtrl', CategoryCtrl);

    CategoryCtrl.$inject = ['category']
    function CategoryCtrl(category) {
        var ctrl = this;
        console.log(category);
        ctrl.name = category.name;
        ctrl.short = category.short_name;
    };
})();
