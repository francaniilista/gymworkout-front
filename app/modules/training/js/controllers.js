'use strict'

angular.module('gymworkoutApp.training.controllers', [])
	.controller('TrainingController', ['$scope', function($scope) {

	}]).controller('TrainingInitController', ['$scope', 'trainingService', function($scope, trainingService) {
		$scope.getAllPlans = function() {
			return trainingService.getAll();
		};

		$scope.plans = $scope.getAllPlans();
	}]).controller('TrainingWorkoutController', ['$scope', function($scope) {

	}]).controller('TrainingExerciseController', ['$scope', function($scope) {

	}]);