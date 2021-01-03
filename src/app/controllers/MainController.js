/**
 * @author Kevin Christian G. Cabana
 * @description Main 
 * @2020
 */

(function () {
    'strict'

    angular
        .module('app')
        .controller('MainController', MainController)
        .directive('mainView', mainView)

        function MainController(HeaderPanel){
            var vm = this;
            vm.HeaderPanel = HeaderPanel
        }

        function mainView () {
            var directive = {
                restrict: 'E',
                controller: 'MainController',
                controllerAs: 'vm',
                templateUrl: './src/app/views/Main.html',
            };
            return directive;
        }
})();