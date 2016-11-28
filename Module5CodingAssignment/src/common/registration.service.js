(function() {
    'use strict'

    angular.module('common')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$http', 'ApiPath']

    function RegistrationService($http, ApiPath) {
        var service = this;

        service.save = function(data) {
            service.user = data;
        }

        service.getUserInfo = function() {
            return service.user;
        }

        service.getSelectedDish = function(shortName) {
            if(!shortName) {
                return;
            }
            return $http.get(ApiPath + '/menu_items/'+ shortName +'.json').then(function (response) {
              return response.data;
            });
        }

    }
})();
