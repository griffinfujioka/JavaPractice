angular.module('feedModule', ['ngResource'])
	.controller('NavCtrl', function ($scope, FeedList) {
		$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	});