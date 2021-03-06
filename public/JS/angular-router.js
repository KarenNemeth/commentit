var myapp = angular.module('CommentIt', ['ui.router', 'ngCookies']);

myapp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '../HTML/home.html',
        controller: 'homecontroller'
    })
    .state('upload', {
        url: '/upload',
        templateUrl: '../HTML/upload.html',
        controller: 'uploadcontroller'
    })
    .state('register', {
        url: '/register',
        templateUrl: '..//HTML/register.html',
        controller: 'registercontroller'
    })
    .state('profile', {
        url: '/profile/:user',
        views: {
            '': {
                templateUrl: '..//HTML/profile.html',
                controller: 'profilecontroller'
            },
            'links@profile': {
                templateUrl: '..//HTML/home.html',
                controller: 'homecontroller'
            }
        }
    })
    .state('login', {
        url: '/login',
        templateUrl: '..//HTML/login.html',
        controller: 'logincontroller'
    })
    .state('settings', {
        url: '/settings',
        templateUrl: '..//HTML/settings.html',
        controller: 'settingscontroller'
    })
    .state('home.comments', {
        url: '/comments',
        templateUrl: '..//HTML/comments.html',
        controller: 'homecontroller'
    });
});

myapp.controller('homecontroller', homecontroller);
myapp.controller('uploadcontroller', uploadcontroller);
myapp.controller('registercontroller', registercontroller);
myapp.controller('profilecontroller', profilecontroller);
myapp.controller('logincontroller', logincontroller);
myapp.controller('settingscontroller', settingscontroller);
