(function() {
    angular
        .module('raffleApp', [
            'ngRoute',
            'ngMessages',
            'ngResource',
            'ngStorage'
        ])
        .config(config);

        function config($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/create/create.html',
                    controller: 'CreateController as vm'
                })
                .when('/enter/:id', {
                    templateUrl: 'app/components/enter/enter.html',
                    controller: 'EnterController as vm',
                    resolve: {
                        raffle: function ($route, RaffleSvc) {
                            return RaffleSvc.get({
                                id: $route.current.params.id
                            });
                        }
                    }
                })
                .when('/draw/:id', {
                    templateUrl: 'app/components/draw/draw.html',
                    controller: 'DrawController as vm',
                    // resolve: {
                        // user needs to be authorized for specific raffle to access
                    // }
                })
        }
})()
