'use strict';

angular.module('postDetail').component('postDetail', {
    templateUrl: 'post-detail/post-detail.template.html',
    controller: ['$routeParams', '$http', function PostDetailController($routeParams, $http) {
        this.postId = $routeParams.postId;

        var self = this;

        $http.get('https://www.reddit.com/r/lakers/comments/' + this.postId + '.json').then(function(res) {
            self.comments = res.data[1].data.children;
        });
    }]
});