'use strict';

/* Controllers */

var gymworkoutControllers = angular.module('gymworkoutControllers', []);

gymworkoutControllers.controller('WelcomeCtrl', ['$scope',
	function ($scope) {
		$scope.msg = '';
	}
]);

gymworkoutControllers.controller('WorkoutFormCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$scope.workout = {};
		$scope.exercises = [
			{option: 1, label: 'Dumbell Presses'},
			{option: 2, label: 'Squat'},
			{option: 3, label: 'Deadlift'}
		];

		//$scope.workout.exercise = $scope.exercises[0];

		$scope.submit = function () {
			$scope.workout = {};
			//$scope.workout.exercise = $scope.exercises[0];
		};
	}
]);