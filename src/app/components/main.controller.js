(function () {
    'use strict';

    angular
        .module('raffleApp')
        .controller('MainController', MainController)

        function MainController () {
            var vm = this;

            vm.title = "my fantastic raffle"

            vm.entry = {
                title: vm.title
            }

        }
})()
