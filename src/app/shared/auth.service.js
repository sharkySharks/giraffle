(function () {
    'use strict';

    angular
        .module('raffleApp')
        .factory('AuthSvc', AuthSvc);

        AuthSvc.$inject = ['$resource'];

        function AuthSvc ($resource) {
            return {
                auth: authenticate()
            }

            // // set local storage key 'raffle' with:
            //     // raffle name, id, and isAuthorized = false as the default

            // function set () {
            //     // raffle name/id set isAuthorized to true when authenticated
            // }

            function authenticate () {
                return $resource('/api/raffles/:id/auth', { id: '@id' });
            }
        }
})()
