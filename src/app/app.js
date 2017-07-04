(function() {
    angular
        .module('raffleApp', [
            'angular-google-analytics',
            'ngMessages',
            'ngResource',
            'ngRoute'
        ])
        .config(config)
        .run(['Analytics', function(Analytics) { }]);

        function config($routeProvider, AnalyticsProvider) {
            AnalyticsProvider
                .setAccount('UA-104248956-2')
                .readFromRoute(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/create/create.html',
                    controller: 'CreateController as vm',
                    pageTrack: '/'
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
                    },
                    pageTrack: '/enter'
                })
                .when('/draw/:id', {
                    templateUrl: 'app/components/draw/draw.html',
                    controller: 'DrawController as vm',
                    resolve: {
                        raffle: function ($route, RaffleSvc) {
                            return RaffleSvc.get({
                                id: $route.current.params.id
                            });
                        }
                    },
                    pageTrack: '/draw'
                })

        }
})()
