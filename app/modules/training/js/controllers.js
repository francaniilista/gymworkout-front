'use strict';

angular.module('gymworkoutApp.training.controllers', [])
	.controller('TrainingController', ['$scope',  function($scope) {

	}]).controller('TrainingInitController', ['$scope', 'ModalService', 'trainingService', '$state',
	function($scope, ModalService, trainingService, $state) {
		var enableDisableRemove = function() {
			$scope.removeToggle = !$scope.removeToggle;
		};

		var cleanSelectedTraining = function() {
			$scope.selectedTraining = [];
		};

		var hasSelection = function(selected, element) {
			return selected === element ? true : false;
		};

		var isTrainingSelected = function(selected) {
			var isSelected = false;
			if ($scope.removeToggle) {
				for (var i = 0; i < $scope.selectedTraining.length; i++) {
					isSelected = hasSelection(selected, $scope.selectedTraining[i]);
					if (isSelected) {
						return true;
					}
				}
			}
			return isSelected;
		};

		$scope.add = function() {
			ModalService.showModal({
				templateUrl: 'modules/training/views/_modal-form.html',
				controller: 'TrainingAddModalController'
			}).then(function(modal) {
				modal.element.modal();
				modal.close.then(function(result) {
					trainingService.save(result);
				});
			});
		};

		$scope.remove = function() {
			enableDisableRemove();

			if ($scope.removeToggle) {
				cleanSelectedTraining();
			} else {
				for (var i = 0; i < $scope.selectedTraining.length; i++) {
					var selected = $scope.selectedTraining[i];
					trainingService.removeById(selected);
				}
			}
		};

		$scope.getAllPlans = function() {
			return trainingService.getAll();
		};

		$scope.selectTraining = function(value) {
			if ($scope.removeToggle) {
				if (isTrainingSelected(value)) {
					var indexOf = $scope.selectedTraining.indexOf(value);
					if (indexOf !== -1) {
						$scope.selectedTraining.splice(indexOf, 1);
					}
				} else {
					$scope.selectedTraining.push(value);
				}
			}
		};

		$scope.openTraining = function(id) {
			$state.go('training.workout', {id: id});
		};

		$scope.plans = $scope.getAllPlans();
		$scope.removeToggle = false;
		$scope.isTrainingSelected = isTrainingSelected;
		$scope.selectedTraining = [];

	}]).controller('TrainingWorkoutController', ['$scope', function($scope) {
		
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