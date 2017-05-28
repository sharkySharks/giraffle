(function () {
    'use strict';

    angular
        .module('raffleApp')
        .factory('RaffleSvc', RaffleSvc)

        RaffleSvc.$inject = ['$resource'];

        function RaffleSvc ($resource) {
            return $resource('/api/raffles/:id',
                {
                    id: '@id'
                },
                {
                    update: {
                        method: 'PUT'
                    }
                }
            );
        }
})()
