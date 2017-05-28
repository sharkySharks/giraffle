(function() {
    'use strict';

    angular
        .module('raffleApp')
        .controller('CreateController', CreateController)

        CreateController.$inject = ['RaffleSvc', '$location'];

        function CreateController (RaffleSvc, $location) {
            var vm = this;

            vm.raffle = new RaffleSvc;

            vm.submit = submit;

            vm.hideForm = false;

            function submit () {
                vm.raffle.$save().then(function (data) {
                    vm.url = '/enter/' + data._id;
                    $location.path(vm.url);
                });
            }
        }
})()
