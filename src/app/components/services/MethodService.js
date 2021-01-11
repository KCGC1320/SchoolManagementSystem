/**
 * @author Kevin Christian G. Cabana
 * @description declare all Global Method 
 * @2020
 */

(function () {

    angular
        .module('app')
        .factory('globalMethods', globalMethods)

    function globalMethods($mdToast, $mdDialog) {
        return {

            /**
             * @method: OpenToast(string)
             * @description: used to open Toast of angular material
             */
            OpenToast(message) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(message)
                        .position('bottom right')
                        .hideDelay(3000))
            },

            /**
              * @method: CloseModal(type)
              * @description: used to close Dialog of angular material
              */
            CloseModal($event) {
                $mdDialog.hide($event)
            },

            /**
              * @method: removeSetArray(array, array)
              * @description: used to remove set of data in an array
              */
            removeSetArray(remove, array) {
                for (let object of remove) {
                    array = array.filter(item => item !== object)
                }
                return array;
            }
        };
    }

})();