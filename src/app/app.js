(function() {
    angular
        .module('raffleApp', [
            'ngRoute',
            'ngMessages'
        ])
        .config(config);

        function config($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/create/create.html',
                    controller: 'CreateController as vm'
                })
                .when('/enter', {
                    templateUrl: 'app/components/enter/enter.html',
                    controller: 'EnterController as vm'
                })
        }
})()
