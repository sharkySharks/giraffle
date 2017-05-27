(function () {
    'use strict';

    angular
        .module('raffleApp')
        .controller('EnterController', EnterController)

        function EnterController () {
            var vm = this;

            vm.entry = {
                firstName: '',
                lastName: '',
                phoneNumber: ''
            }

            vm.submit = submit;

            function submit () {

            }
        }
})()
