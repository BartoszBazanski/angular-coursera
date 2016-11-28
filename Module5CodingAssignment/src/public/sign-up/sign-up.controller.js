(function() {
    'use strict'

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['RegistrationService'];

    function SignUpController(RegistrationService) {
        var ctrl = this;
        ctrl.searchQueryValid = false;
        ctrl.user = {};
        ctrl.submit = function() {
            RegistrationService.save(ctrl.user);
        }

        ctrl.search = function(dish) {
            ctrl.searchMessage = "";
            RegistrationService.getSelectedDish(dish).then(function(response) {
                ctrl.user.favoriteDish = response;
                ctrl.searchMessage = ctrl.user.favoriteDish.name;
                ctrl.searchQueryValid = true;
            }, function() {
                ctrl.searchMessage = "No such dish was found!";
                ctrl.user.favoriteDish = null;
                ctrl.searchQueryValid = false;
            })
        }
    }

})();
