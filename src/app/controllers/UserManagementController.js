/**
 * @author Kevin Christian G. Cabana
 * @description Main 
 * @2020
 */

 (function(){
    angular
        .module('app')
        .controller('UserManagement', UserManagement)

        function UserManagement(globalMethods) {
            var vm = this;
            vm.globalMethods = globalMethods // global method injected

            vm.selected = [];
            
            vm.userList = [{
                name: 'Kevin Christian G. Cabana',
                position: 'Software Developer',
                level: 1
            },{
                name: 'Jomari Buena',
                position: 'Software Developer',
                level: 1
            }];

            vm.query = {
                order: 'name',
                limit: 5,
                page: 1
            };

            vm.delete = function(){
                vm.globalMethods.OpenToast('Method DELETE Not Available')
            }

            vm.update = function(){
                vm.globalMethods.OpenToast('Method UPDATE Not Available')
            }
        }

 })()