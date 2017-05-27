(function () {
    'use strict';

    angular
        .module('raffleApp')
        .controller('CreateController', CreateController)

        function CreateController () {
            var vm = this;

            vm.raffleName = '';


        }
})()
