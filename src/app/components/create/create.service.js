(function() {
    'use strict';

    angular
        .module('raffleApp')
        .factory('CreateRaffleSvc', CreateRaffleSvc);

    CreateRaffleSvc.$inject = ['$http']

    function CreateRaffleSvc($http) {
        return {
            create: create
        }

        function create(newRaffle) {
            return $http.post('/api/create', newRaffle)
                .then(success, failure)

            function success(res) {
                console.log("everything is cool: ", res.data);
                return res.data;
            }

            function failure(err) {
                console.log("something went wrong: ", err.data);
                return err.data;
            }
        }
    }
})()
