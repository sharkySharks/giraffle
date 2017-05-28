(function () {
    'use strict';

    angular
        .module('raffleApp')
        .controller('EnterController', EnterController)

        function EnterController (raffle) {
            var vm = this;

            vm.entry = {
                firstName: '',
                lastName: '',
                phoneNumber: ''
            }

            vm.submit = submit;

            activate();

            function activate () {
                raffle.$promise.then(function (raffle) {
                    vm.raffle = raffle;
                    vm.title = raffle.name;
                    vm.isOpen = raffle.status === 'open';
                });
            }

            function submit () {
                vm.raffle.entries.push(vm.entry);

                vm.raffle.$update(function (data) {
                    vm.hideForm = true;
                });
            }

            function closeRaffle () {

            }

            function


        }
})()
