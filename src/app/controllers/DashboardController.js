/**
 * @author Kevin Christian G. Cabana
 * @description DashboardController 
 * @2020
 */

(function () {
    angular
        .module('app')
        .run(runBlock)
        .controller('DashboardController', DashboardController)
        .factory('DashboardFactory', DashboardFactory)
       
    runBlock.$inject = ['DashboardFactory'];
    DashboardController.$inject = ['$timeout', 'DashboardFactory'];
    DashboardFactory.$inject = [];

    function runBlock(DashboardFactory){}

    function DashboardController($timeout) {
        var vm = this;
        /**
         * @method: Slide Show
         * @description: 
         */
        var slides = 3;
        var slidesIntervals = 3000;
        vm.slideshow = 1;
        let slideTimer
        vm.$onInit = $timeout(function interval() {
            vm.slideshow = (vm.slideshow % slides) + 1;
            slideTimer = $timeout(interval, slidesIntervals);
        }, slidesIntervals);

        /**
         * @method: navigator(number)
         * @description: 
         */
        vm.navigator = function(direction){
            if(direction) {
                return (vm.slideshow >= slides) ? false : vm.slideshow++
            }else {
                return (vm.slideshow <= 1) ? false : vm.slideshow--
            }
        }
    }

    function DashboardFactory() {return{}}

})()