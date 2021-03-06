'use strict';

var searchApp = angular.module('searchApp', []);

searchApp.controller('SearchSiteCtrl', function($scope, $http, $filter) {
	// Initial values
	$scope.noResult = false;
	$scope.newCategories = [];

	// Get categories data
	$http.get('data/category.json').success(function(categories) {
		$scope.categories = categories;
	});

	$http.get('data/site.json').success(function(sites) {
		$scope.sites = sites;


		angular.forEach(sites, function(site, index) {
			var catIdArray = site.categoryIds;
			// get array of 'worded' category based on current id
			$scope.newCategories = getCategoryById(catIdArray, $scope.categories);

			// replace current category array with the newCategories array
			site.categoryIds = $scope.newCategories;
		});

	});

	$scope.search = function (keywords) {
		var sites = $scope.sites;
		// if Enter is pressed, get $scope.searchTerm
		// otherwise, get the keywords sent by click event
		var keywords = (typeof keywords !== 'undefined') ? keywords : $scope.searchTerm;
		$scope.results = $filter('filter')(sites, keywords);
		$scope.noResult = ($scope.results.length) ? false : true;
	}

	/**
	 * Method to get the category description based on category ID
	 * @param  {Array} idArray Array of category id
	 * @param  {Array of objects} cats    Category object
	 * @return {Array}         Array of category name
	 */
	function getCategoryById(idArray, cats) {
		var arr = [];

		for (var i=0; i<idArray.length; i++) {
			$.grep(cats, function (cat) {
				if (cat.id === idArray[i]) {
					arr.push(cat.description);
				}
			});
		}

		return arr;
	}
});
