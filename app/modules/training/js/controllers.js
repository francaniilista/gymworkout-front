'use strict'

angular.module('gymworkoutApp.training.controllers', [])
	.controller('TrainingController', ['$scope', function($scope) {

	}]).controller('TrainingInitController', ['$scope', 'ModalService', 'trainingService', function($scope, ModalService, trainingService) {
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
				for (var selected in $scope.selectedTraining) {
					trainingService.remove(selected);
				}
			}
		};

		$scope.getAllPlans = function() {
			return trainingService.getAll();
		};

		$scope.selectTraining = function(value) {
			if (isTrainingSelected(value)) {
				var indexOf = $scope.selectedTraining.indexOf(value);
				if (indexOf !== -1) {
					$scope.selectedTraining.splice(indexOf, 1);
					console.log("Training plan " + (value + 1) + " unselected");
				}
			} else {
				$scope.selectedTraining.push(value)
				console.log("Training plan " + (value + 1) + " selected");
			}	
			
		};

		var enableDisableRemove = function() {
			$scope.removeToggle = !$scope.removeToggle;
		}

		var cleanSelectedTraining = function() {
			$scope.selectedTraining = [];
		}

		var isTrainingSelected = function(selected) {
			var isSelected = false;
			if ($scope.removeToggle) {
				for (var index in $scope.selectedTraining) {
					isSelected = hasSelected(selected, $scope.selectedTraining[index]);
					if (isSelected) {
						return true;
					}
				}
			}
			return isSelected;
		};

		var hasSelected = function(selected, element) {
			return selected === element ? true : false;
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