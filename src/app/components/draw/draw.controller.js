(function () {
    angular
        .module('raffleApp')
        .controller('DrawController', DrawController);

        DrawController.$inject = ['raffle', 'AuthSvc', 'RaffleSvc'];

        function DrawController (raffle, AuthSvc, RaffleSvc) {
            var vm = this;

            vm.password = '';

            vm.activate = activate;
            vm.validatePassword = validatePassword;
            vm.drawWinner = drawWinner;

            vm.activate();

            function activate () {
                raffle.$promise.then(function (raffle) {
                    vm.raffle = raffle;
                    vm.title = raffle.name;
                    vm.winners = raffle.winners;
                    vm.totalEntries = raffle.entries.length;
                    vm.isAuthorized = AuthSvc.isAuthorized(raffle.name);
                });
            }

            function validatePassword () {
                vm.auth = new AuthSvc.auth;
                vm.auth.password = vm.password;
                vm.auth.$save({ id: raffle._id }, function (data) {
                    AuthSvc.set(raffle.name);
                    vm.isAuthorized = AuthSvc.isAuthorized(raffle.name);
                }, function (err) {
                    vm.errorMessage = err.data;
                });
            }

            function drawWinner () {

                RaffleSvc.get({ id: raffle._id }, function (raffle) {
                    var winnerIndex = getRandomInt(raffle.entries.length)
                    var winner = raffle.entries[winnerIndex];

                    // add the winner to the winner array
                    raffle.winners.push(winner);
                    // remove the winner from the entries array so that they cannot be selected again
                    raffle.entries.splice(winnerIndex, 1);

                    raffle.$update({ id: raffle._id }, function (raffle) {
                        vm.winners = raffle.winners;
                        vm.totalEntries = raffle.entries.length;
                    }, function (err) {
                        console.log('err: ', err);
                    });
                });
            }

            function getRandomInt(max) {
                // randomize the selection of index entries,
                // inclusive of the max value passed in bc using array length above
                min = 0;
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
})()
