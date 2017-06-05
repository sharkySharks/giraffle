(function () {
    'use strict';

    angular
        .module('raffleApp')
        .factory('AuthSvc', AuthSvc);

        AuthSvc.$inject = ['$resource', '$window'];

        function AuthSvc ($resource, $window) {
            return {
                auth: authenticate(),
                set: set,
                isAuthorized: isAuthorized
            }

            function set (raffleName) {
                $window.localStorage.setItem(raffleName, JSON.stringify(true))
            }

            function isAuthorized (raffleName) {
                return $window.localStorage.getItem(raffleName) === 'true';
            }

            function authenticate () {
                return $resource('/api/raffles/:id/auth', { id: '@id' });
            }
        }
})()
