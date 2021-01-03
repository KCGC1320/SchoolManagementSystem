/**
 * @author Kevin Christian G. Cabana
 * @description declare all general function 
 * @2020
 */

(function () {

    angular
        .module('app')
        .factory('HeaderPanel', HeaderPanel)

    function HeaderPanel($mdMedia) {
        return {
            leftSidenavLockedOpen: $mdMedia('gt-md'),
            leftSidenavIcon: 'menu_open',
            routeName: 'Dashboard',
            toggleSidenav(id){
                switch(id){
                    case 'left-panel' : 
                        if (this.leftSidenavLockedOpen) {
                            this.leftSidenavLockedOpen = !this.leftSidenavLockedOpen
                            this.leftSidenavIcon = 'menu'
                        } else {
                            this.leftSidenavLockedOpen = !this.leftSidenavLockedOpen
                            this.leftSidenavIcon = 'menu_open'
                        }
                    break;
                }
            },

            toggleMenu() {
                console.log('OPEN MENU PANEL')
            },

            navigateTo(route) {
                this.routeName = route
            }
        };
    }

})();