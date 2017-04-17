'use strict';

angular.module('gymworkoutApp.overview', [
	'gymworkoutApp.overview.controllers']);

angular.module('gymworkoutApp.overview').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.state('overview', {
			url: '/overview',
			abstract: true,
			controller: 'OverviewController',
			templateUrl: 'modules/overview/views/overview.html'
		}).state('overview.all', {
			url: '',
			controller: 'OverviewAllController',
			templateUrl: 'modules/overview/views/overview-all.html'
		});
	}]);