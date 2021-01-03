/**
 * @author Kevin Christian G. Cabana
 * @description declare all Global Method 
 * @2020
 */

(function () {

    angular
        .module('app')
        .factory('globalMethods', globalMethods)

    function globalMethods($mdToast,$log) {
        return {
           OpenToast(message){
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position('bottom right')
                .hideDelay(3000))
           }
        };
    }

})();