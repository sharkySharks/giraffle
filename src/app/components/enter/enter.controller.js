(function () {
    'use strict';

    angular
        .module('raffleApp')
        .controller('EnterController', EnterController)

        EnterController.$inject = ['raffle', 'AuthSvc'];

        function EnterController (raffle, AuthSvc) {
            var vm = this;

            vm.entry = {
                firstName: '',
                lastName: '',
                phoneNumber: ''
            }

            vm.rafflePassword = ''

            vm.submitEntry = submitEntry;
            vm.validatePassword = validatePassword;


            activate();

            function activate () {
                raffle.$promise.then(function (raffle) {
                    vm.raffle = raffle;
                    vm.title = raffle.name;
                });
            }

            function submitEntry () {
                vm.raffle.entries.push(vm.entry);

                vm.raffle.$update({ id: raffle._id }, function (data) {
                    console.log('data:', data);
                });
            }

            function validatePassword () {
                vm.auth = new AuthSvc.auth;
                vm.auth.password = vm.rafflePassword;
                vm.auth.$save({ id: raffle._id }, function (data) {
                    console.log('data:', data);
                }, function (err) {
                    console.log('error:', err);
                });
                // on success store verification in localstorage so user continues to be
                    // authenticated after they give the right password
                // redirect to the drawing page
            }
        }
})()
