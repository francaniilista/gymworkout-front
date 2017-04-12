'use strict'

angular.module('gymworkoutApp.training', [
	'gymworkoutApp.training.controllers',
	'gymworkoutApp.training.services']);

angular.module('gymworkoutApp.training').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.state('training', {
			url: '/training',
			abstract: true,
			controller: 'TrainingController',
			templateUrl: 'modules/training/views/training-plan.html'
		}).state('training.init', {
			url: '/init',
			controller: 'TrainingInitController',
			templateUrl: 'modules/training/views/training-init.html'
		}).state('training.workout', {
			url: '/:id',
			controller: 'TrainingWorkoutController',
			templateUrl: 'modules/training/views/training-workout.html'
		}).state('training.exercise', {
			url: '/exercise',
			controller: 'TrainingExerciseController',
			templateUrl: 'modules/training/views/training-exercise.html'
		});
	}]);