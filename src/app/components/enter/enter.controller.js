(function () {
    'use strict';

    angular
        .module('raffleApp')
        .controller('EnterController', EnterController)

        EnterController.$inject = ['raffle', '$location'];

        function EnterController (raffle, $location) {
            var vm = this;

            vm.activate = activate;
            vm.submitEntry = submitEntry;
            vm.redirectToDrawing = redirectToDrawing;

            vm.entry = {
                firstName: '',
                lastName: '',
                phoneNumber: ''
            }

            vm.rafflePassword = ''
            vm.submitStatus = '';

            vm.activate();

            function activate () {
                raffle.$promise.then(function (raffle) {
                    vm.raffle = raffle;
                    vm.title = raffle.name;
                });
            }

            function submitEntry () {
                vm.raffle.entries.push(vm.entry);

                vm.raffle.$update({ id: raffle._id }, function (data) {
                    vm.submitStatus = 'success';

                    vm.entry = {
                        firstName: '',
                        lastName: '',
                        phoneNumber: ''
                    }

                }, function (err) {
                    vm.submitStatus = 'error'
                    vm.errorMessage = 'An error occurred: ' + err.data || err;
                });
            }

            function redirectToDrawing () {
                $location.path('/draw/' + raffle._id)
            }
        }
})()
