//Sorting by date
function sortFunction(a, b) {
	return (a["date"] > b["date"]) ? -1 : 1;
}

//declare URL
var theURL = "/index.json"

//declare app, work with Jekyll
var app = angular.module('filter', [], function($newSymbol) {
		$newSymbol.startSymbol('[[');
		$newSymbol.endSymbol(']]');
});


app.controller('filterDisplay', function ($scope, $http) {
	$http.get(theURL).then(function (response) {
		//all page data
		allPages = response.data;
		filteredPages = [];		
		//filter by layout name, and append Product Pages to array
		for (i = 0; i < allPages.length; i++) {
			if (allPages[i].layout === "productLayout") {
				filteredPages.push(allPages[i]);
			}
		}
		
		//if you've added a date variable to the jekyll page header, you can sort the pages by date
		var sorted = filteredPages.sort(sortFunction);

		//all other Product Pages
		$scope.filteredPages = filteredPages;

	});
});