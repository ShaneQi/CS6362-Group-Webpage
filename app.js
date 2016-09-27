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
	];

	$scope.documents = [
		{
			"file_name": "Preliminary Project Plan",
			"file_type": "Google Doc",
			"url": "https://docs.google.com/document/d/1RIH8SEySU1Z5ixD4YcAVBHoJUt3E9XJrdkvFkt70I_8/edit?usp=sharing",
		},
		{
			"file_name": "September 8 Meeting Notes",
			"file_type": "Google Doc",
			"url": "https://docs.google.com/document/d/1W8MgtFdL9v--_iqjk2yG13v-XmPMjI59Y-lkW00C84k/edit?usp=sharing",
		},
		
		{
			"file_name": "August 30 Meeting Notes",
			"file_type": "Google Doc",
			"url": "https://docs.google.com/document/d/1YJ0rAvkSvxULZ8BW2oot5dnt6pwALih1gnn0iZzR-JU/edit?usp=sharing",
		},
	];

});

