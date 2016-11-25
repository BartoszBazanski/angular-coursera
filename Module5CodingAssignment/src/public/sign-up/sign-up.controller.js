(function() {
    'use strict'

    angular.module('public')
        .controller('SignUpController', SignUpController);

    function SignUpController() {
        var ctrl = this;
        ctrl.submit = function() {
            console.log("Your information were successfully changed!");
        }
    }

})();
