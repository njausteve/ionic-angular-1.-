angular.module('appmart.controllers', [])
//
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
//
//  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html', {
//    scope: $scope
//  }).then(function(modal) {
//    $scope.modal = modal;
//  });
//
//  // Triggered in the login modal to close it
//  $scope.closeLogin = function() {
//    $scope.modal.hide();
//  };
//
//  // Open the login modal
  $scope.logout = function() {
     console.log("clicked logout");
//      $state.go('logout');
//      $state.go($state.$current, null, { reload: true });
      $state.go('login');
  };
//
//  // Perform the login action when the user submits the login form
//  $scope.doLogin = function() {
//    console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
//  };
    
    
})


.controller('PlaylistsCtrl', function($scope) {
    
    console.log("inside playlistsCtrl");
    
    
         

  $scope.playlists = [
    { title: 'App1', id: 1, description:'Lorem ipsum dolor sit amet, no eius nonumy reformidans pro, pertinax abhorreant mediocritatem ut pro, his graece incorrupte cu. No vel utamur qualisque, ea tritani nominavi definitionem usu, eirmod singulis referrentur et eam. Aeque decore dssentias ea vis. Sit id admodum percipit, eos posse feugait voluptatum id..' },
    { title: 'App2', id: 2, description:'Lorem ipsum dolor sit amet, no eius nonumy reformidans pro, pertinax abhorreant mediocritatem ut pro, his graece incorrupte cu. No vel utamur qualisque, ea tritani nominavi definitionem usu, eirmod singulis referrentur et eam. Aeque decore dissentias ea vis. Sit id admodum percipit, eos posse feugait voluptatum id..'},
    { title: 'App3', id: 3, description:'Lorem ipsum dolor sit amet, no eius nonumy reformidans pro, pertinax abhorreant mediocritatem ut pro, his graece incorrupte cu. No vel utamur qualisque, ea tritani nominavi definitionem usu, eirmod singulis referrentur et eam. Aeque decore dissentias ea vis. Sit id admodum percipit, eos posse feugait voluptatum id..'},
    { title: 'App4', id: 4, description:'Lorem ipsum dolor sit amet, no eius nonumy reformidans pro, pertinax abhorreant mediocritatem ut pro, his graece incorrupte cu. No vel utamur qualisque, ea tritani nominavi definitionem usu, eirmod singulis referrentur et eam. Aeque decore dissentias ea vis. Sit id admodum percipit, eos posse feugait voluptatum id..'},
    { title: 'App5', id: 5, description:'Lorem ipsum dolor sit amet, no eius nonumy reformidans pro, pertinax abhorreant mediocritatem ut pro, his graece incorrupte cu. No vel utamur qualisque, ea tritani nominavi definitionem usu, eirmod singulis referrentur et eam. Aeque decore dissentias ea vis. Sit id admodum percipit, eos posse feugait voluptatum id..' },
    { title: 'App6', id: 6, description:'Lorem ipsum dolor sit amet, no eius nonumy reformidans pro, pertinax abhorreant mediocritatem ut pro, his graece incorrupte cu. No vel utamur qualisque, ea tritani nominavi definitionem usu, eirmod singulis referrentur et eam. Aeque decore dissentias ea vis. Sit id admodum percipit, eos posse feugait voluptatum id..' }
  ];
    
    
     function install(id){
           
         console.log(id);
     }
    
    
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
