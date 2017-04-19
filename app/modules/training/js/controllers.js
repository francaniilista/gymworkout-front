'use strict';

angular.module('gymworkoutApp.training.controllers', [])
	.controller('TrainingController', ['$scope', '$state', function($scope, $state) {
		$state.go('training.init');
	}]).controller('TrainingWorkoutController', ['$scope', '$stateParams', '$state', 'trainingService', 'ModalService', function($scope, $stateParams, $state, trainingService, ModalService) {
		$scope.plan = trainingService.getTrainingPlanById($stateParams.id);

		$scope.add = function() {
			ModalService.showModal({
				templateUrl: 'modules/training/views/_modal-form-workout.html',
				controller: 'TrainingAddModalController'
			}).then(function(modal) {
				modal.element.modal();
				modal.close.then(function(result) {
					var workout = result;
					if ($scope.plan.workouts === undefined) {
						$scope.plan.workouts = [];
					}
					workout.id = $scope.plan.workouts.length + 1;
					$scope.plan.workouts.push(workout);
					trainingService.update($scope.plan);
				});
			});
		};
	}]).controller('TrainingExerciseController', ['$scope', function($scope) {

	}]).controller('TrainingAddModalController', ['$scope', '$element', 'close',  function($scope, $element, close) {
		$scope.name = null;
		$scope.description = null;

		$scope.save = function() {
			close({
				title: $scope.name,
				description: $scope.description
			}, 500);
		};

		$scope.close = function() {
			$element.modal('hide');
		};
	}]);