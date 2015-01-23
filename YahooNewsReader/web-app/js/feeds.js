var feeds = [];
	
angular.module('feedModule', ['ngResource'])
	.factory('FeedLoader', function ($resource) {
		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
		});
	})
	.service('FeedList', function ($rootScope, FeedLoader) {
		this.get = function() {
			var feedSources = [
				{title: 'Sports', url: 'http://news.yahoo.com/rss/sports'},
				{title: 'Entertainment', url: 'http://news.yahoo.com/rss/entertainment'},
				{title: 'Tech', url: 'http://news.yahoo.com/rss/entertainment'},
			];
			if (feeds.length === 0) {
				for (var i=0; i<feedSources.length; i++) {
					FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
						var feed = data.responseData.feed;
						feeds.push(feed);
					});
				}
			}
			return feeds;
		};
	})
	.controller('FeedCtrl', function ($scope, FeedList) {
		$scope.feeds = FeedList.get();
		$scope.$on('FeedList', function (event, data) {
			$scope.feeds = data;
		});
		$scope.loadButonText="Load";
	    $scope.loadFeed=function(e){        
	        Feed.parseFeed($scope.feedSrc).then(function(res){
	            $scope.loadButonText=angular.element(e.target).text();
	            $scope.feeds=res.data.responseData.feed.entries;
	        });
	    }
	});