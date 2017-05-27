(function() {
    angular
        .module('raffleApp', [
            'ngRoute'
        ])
        .config(config);

        function config($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/main.html',
                    controller: 'MainController as vm'
                })
        }
})()
