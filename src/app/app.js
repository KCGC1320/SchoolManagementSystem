/**
 * @author Kevin Christian G. Cabana
 * @description intialize angular module
 * @2020
 */

(function () {
    'strict'

    angular
        .module('app', [
            'ngMaterial','ngAnimate', 'ngCookies',
            'ngSanitize', 'ui.router', 'ngMaterial',
            'md.data.table'
        ])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('dashboard', {
                    url: '/dashboard',
                    template: '<h1>DASHBOARD</h1>',
                    resolve: {
                        emit: function() {
                            console.log('DASHBOARD')
                        }
                    }
                })

                .state('userManagement', {
                    url: '/userManagement',
                    template: '<h1>USER MANAGEMENT</h1>',
                    resolve: {
                        emit: function() {
                            console.log('USER MANAGEMENT')
                        }
                    }
                })

            $urlRouterProvider.otherwise('404');
        })

})();