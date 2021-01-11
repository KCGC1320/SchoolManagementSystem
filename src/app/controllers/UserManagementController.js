/**
 * @author Kevin Christian G. Cabana
 * @description UserManagementController 
 * @2020
 */

(function () {
    angular
        .module('app')
        .controller('UserMgtController', UserMgtController)
        .factory('UserMgtFactory', UserMgtFactory)
        .run(function (UserMgtFactory) {
            UserMgtFactory.UserList = [{
                name: 'Kevin Christian G. Cabana',
                position: 'Software Developer',
                level: 'Developer'
            }, {
                name: 'Jomari Buena',
                position: 'Software Developer',
                level: 'Supervisor'
            }];
        })

    function UserMgtController(UserMgtFactory, globalMethods, $mdDialog) {
        var vm = this;
        vm.UserMgtFactory = UserMgtFactory
        vm.globalMethods = globalMethods // global method injected
    }

    function UserMgtFactory($mdDialog, globalMethods) {
        return {
            UserInformation: {},
            FormTitle: null,
            UserList: [],
            selected: [],
            accessLevel: ['Manager', 'Supervisor', 'Developer'],
            query: {
                order: 'name',
                limit: 5,
                page: 1
            },

            /**
            * @method: submitUserForm()
            * @description: used to add new user information
            */
            submitUserForm() {
                this.UserList.push(this.UserInformation)
                globalMethods.CloseModal()
            },

            /**
            * @method: deleteUser()
            * @description: used to delete user information
            */
            deleteUser() {
                this.UserList = globalMethods.removeSetArray(this.selected, this.UserList)
            },

            /**
             * @method: OpenModalDialog(target, object)
             * @description: used to open Dialog of angular material
             */
            OpenModalDialog($event, UpdateData) {
                if (UpdateData) {
                    this.FormTitle = 'Update';
                    this.UserInformation = angular.copy(UpdateData);
                } else {
                    this.FormTitle = 'Add';
                    this.UserInformation = {}
                }

                $mdDialog.show({
                    controller: 'UserMgtController',
                    controllerAs: 'vm',
                    targetEvent: $event,
                    template:
                        `<md-dialog>
                            <form name="userInformation" ng-submit="vm.UserMgtFactory.submitUserForm()" >
                                <md-toolbar class="md-hue-2">
                                    <div class="md-toolbar-tools">
                                        <h2 flex md-truncate>{{vm.UserMgtFactory.FormTitle}} New User</h2>
                                        <md-button class="md-icon-button" aria-label="Close" ng-click="vm.globalMethods.CloseModal($event)">
                                            <md-icon aria-label="Close" class="material-icons">close</md-icon>
                                        </md-button>
                                    </div>
                                </md-toolbar>
                                <md-dialog-content layout-padding>
                                    <div class="md-block">
                                        <md-input-container>
                                            <label>Username</label>
                                            <input required ng-model="vm.UserMgtFactory.UserInformation.name">
                                            <div ng-messages="vm.UserMgtFactory.UserInformation.name.$error">
                                                <div ng-message="required">Name is required.</div>
                                            </div>
                                        </md-input-container>
                                    
                                        <md-input-container>
                                            <label>Position</label>
                                            <input required ng-model="vm.UserMgtFactory.UserInformation.position">
                                            <div ng-messages="vm.UserMgtFactory.UserInformation.position.$error">
                                                <div ng-message="required">Position is required.</div>
                                            </div>
                                        </md-input-container>
                                    </div>
                                    <md-input-container class="md-block">
                                        <label>Access Level</label>
                                        <md-select required ng-model="vm.UserMgtFactory.UserInformation.level">
                                            <md-option ng-repeat="state in vm.UserMgtFactory.accessLevel" value="{{state}}" selected="vm.UserMgtFactory.accessLevel[$index]">
                                                {{state}}
                                            </md-option>
                                        </md-select>
                                        
                                    </md-input-container>
                                </md-dialog-content> 
                                <md-dialog-actions> 
                                    <md-button ng-disabled='userInformation.$invalid' class="md-raised md-primary" type="submit">Submit</md-button>
                                </md-dialog-actions> 
                            </form>
                        </md-dialog>`,
                })
            },
        }
    }

})()