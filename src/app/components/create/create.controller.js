(function() {
    'use strict';

    angular
        .module('raffleApp')
        .controller('CreateController', CreateController)

        CreateController.$inject = ['CreateRaffleSvc'];

        function CreateController (CreateRaffleSvc) {
            var vm = this;

            vm.raffleName = '';

            vm.submit = submit;

            function submit () {
                return CreateRaffleSvc.create(vm.raffleName).then(function (data) {
                    // create url from data response
                    // then navigate to that using $location.path('/new-raffle-path')
                    vm.data = data;
                }, function (err) {
                    // return error to the user and ask them to try again
                });
            }
        }
})()
