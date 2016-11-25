(function() {
    'use strict'

    angular.module('public')
        .service('RegistrationService', RegistrationService);

    function RegistrationService() {
        var service = this;

        service.save = function(data) {
            service.user = data;
        }

        service.getUserInfo = function() {
            return service.user;
        }
    }
})();
