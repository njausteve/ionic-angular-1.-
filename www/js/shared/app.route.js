angular.module('appmart')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
   .state('login', {
      url: '/login',
      templateUrl: 'templates/login/login.html',
      controller: 'loginController',
      controllerAs : 'login'
  })
      
 .state('logout', {
		url: '/logout',
		controller: function($scope, $route) {
			$route.reload()
		}
	})
  
.state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
 
  });
  // if none of the above states are matched, use this as the fallback
//  $urlRouterProvider.otherwise('/app/playlists');
    
  $urlRouterProvider.otherwise('/login');    
    
});
