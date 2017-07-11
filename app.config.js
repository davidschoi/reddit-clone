'use strict';

angular.module('app-reddit')
    .config(['$locationProvider' ,'$routeProvider', function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/posts', {
            template: '<post-list></post-list>'
        }).when('/posts/:postId', {
            template: '<post-detail></post-detail>'
        }).otherwise({
            redirectTo: '/posts'
        });
    }
]);