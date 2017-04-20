'use strict';

angular.module('gymworkoutApp.training.controllers')
	.controller('TrainingInitController', ['$scope', 'modalService', 'trainingService', '$state',
	function($scope, modalService, trainingService, $state) {
		var enableDisableRemove = function() {
			$scope.removeToggle = !$scope.removeToggle;
		};

		var enableDisableEdit = function() {
			$scope.editToggle = !$scope.editToggle;
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
			} else if ($scope.editToggle) {

			}
			return isSelected;
		};

		$scope.add = function() {
			modalService.showModal({
				nameParam: null,
				descriptionParam: null,
				msgFn: 'Add',
				labelFn: 'Save'
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

		$scope.edit = function() {
			enableDisableEdit();
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
			} else if ($scope.editToggle) {
				var plan = trainingService.getTrainingPlanById(value);

				modalService.showModal({
					nameParam: plan.title,
					descriptionParam: plan.description,
					msgFn: 'Edit',
					labelFn: 'Update'
				}).then(function(modal) {
					modal.element.modal();
					modal.close.then(function(result) {
						plan.title = result.title;
						plan.description = result.description;
						trainingService.update(plan);
						enableDisableEdit();
					});
				});
			}
		};

		$scope.openTraining = function(id) {
			$state.go('training.workout', {id: id});
		};

		$scope.plans = trainingService.getAll();
		$scope.removeToggle = false;
		$scope.editToggle = false;
		$scope.isTrainingSelected = isTrainingSelected;
		$scope.selectedTraining = [];

	}]).controller('TrainingAddModalController', ['$scope', '$element', 'nameParam', 'descriptionParam', 'msgFn','labelFn','close',  
	function($scope, $element, nameParam, descriptionParam, msgFn, labelFn, close) {
		$scope.name = nameParam;
		$scope.description = descriptionParam;
		$scope.msgFn = msgFn;
		$scope.labelFn = labelFn;

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