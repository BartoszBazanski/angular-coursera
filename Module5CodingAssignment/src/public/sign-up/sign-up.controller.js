(function() {
    'use strict'

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['RegistrationService']

    function SignUpController(RegistrationService) {
        var ctrl = this;
        ctrl.submit = function() {
            RegistrationService.save(ctrl.user);
            ctrl.fetch();
        }

        ctrl.fetch = function() {
            console.log(RegistrationService.getUserInfo());
        }
    }

})();
