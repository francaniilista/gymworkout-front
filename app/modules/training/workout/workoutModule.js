'use strict';

angular.module('gymworkoutApp.training.workout', [
	'gymworkoutApp.training.workout.controllers',
	'gymworkoutApp.training.workout.services']);

angular.module('gymworkoutApp.training.workout').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.state('workout', {
			url: '/'
		});
	}]);