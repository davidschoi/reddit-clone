'use strict';

angular.module('postList').component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['$http', function PostListController($http) {
        var self = this;

        $http.get('https://www.reddit.com/r/lakers/hot.json').then(function(res) {
            self.posts = res.data.data.children;
        });
    }]
});