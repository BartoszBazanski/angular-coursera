describe("Testing SignUpController", function() {
    var $controller;
    var SignUpController;
    var regService;
    var $scope;
    var $q;
    var deferred;

    beforeEach(module('public'));

    beforeEach(inject(function(_$controller_, _$q_, RegistrationService, _$rootScope_) {
        $controller = _$controller_;
        $q = _$q_;
        $scope = _$rootScope_;
        regService = RegistrationService;
        deferred = _$q_.defer();
        spyOn(regService, 'getSelectedDish').and.returnValue(deferred.promise);
        // var RegistrationServiceMock = {};
        // RegistrationServiceMock.save = function() {
        //     return null;
        // };
        // RegistrationServiceMock.getSelectedDish = function() {
        //     var deferred = $q.defer();
        //     deferred.reject('Wrong!');
        //     return deferred.promise;
        // };
        //
        SignUpController = $controller('SignUpController', {
            $scope: $scope,
            RegistrationService: regService
        });
    }));

    it('should print out error message', function() {
        deferred.promise.catch(function(data) {
            response = data;
        });
        deferred.reject("Wrong!");

        $scope.$apply();

        expect(response).toBe("Wrong!");
    });
})
