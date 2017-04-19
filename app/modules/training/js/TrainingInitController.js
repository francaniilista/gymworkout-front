'use strict';

angular.module('gymworkoutApp.training.controllers')
	.controller('TrainingInitController', ['$scope', 'ModalService', 'trainingService', '$state',
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
				templateUrl: 'modules/training/views/_modal-form-training.html',
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

		$scope.plans = trainingService.getAll();
		$scope.removeToggle = false;
		$scope.isTrainingSelected = isTrainingSelected;
		$scope.selectedTraining = [];

	}]);