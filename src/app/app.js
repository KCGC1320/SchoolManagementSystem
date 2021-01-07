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
            'ngSanitize', 'ui.router', 'md.data.table'
        ])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: './src/app/views/Dashboard.html',
                    resolve: {
                        emit: function() {
                            console.log('DASHBOARD')
                        }
                    }
                })

                .state('userManagement', {
                    url: '/userManagement',
                    templateUrl: './src/app/views/UserManagement.html',
                    controller: 'UserManagement',
                    controllerAs: 'vm',
                    resolve: {
                        emit: function() {
                            console.log('USER MANAGEMENT')
                        }
                    }
                })

            $urlRouterProvider.otherwise('404');
        })

})();