var app = angular.module('teamC3', ['ngMaterial']);


app.controller('IndexController', function($scope) {

	$scope.project = 0;
	$scope.projectTitles = ["Project 1"];

	$scope.switchProject = function(index) {
		$scope.project = index;
	}

	$scope.members = [
	{
		"name": "Daren",
		"netid": "dxc122030"
	},
	{
		"name": "Kelsey",
		"netid": "txs124130"
	},
	{
		"name": "Shane",
		"netid": "zxq150130"
	}
	];

	$scope.meetings = [
	{
		"title": "September 22 Meeting",
		"sub_title": "ECSS Lab - All Team Members",
		"content": "Architecture Redesign.",
		"span_row": 4
	},
	{
		"title": "September 8 Meeting",
		"sub_title": "ECSS Lab - All Team Members",
		"content": "Functional Requirement Specification \nNonfunctional Requirement Specification \nPreliminary Architecture Design.",
		"span_row": 4
	},
	{
		"title": "August 30 Meeting",
		"sub_title": "McDermott Library - All Team Members",
		"content": "Worked on preliminary project plan.",
		"span_row": 4
	},
	{
		"title": "August 25 Meeting",
		"sub_title": "ECSS 2.306 - All Team Members",
		"content": "Formed team, planned next meeting.",
		"span_row": 4
	}
	]

});

