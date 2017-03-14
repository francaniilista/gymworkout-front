'use strict'

angular.module('gymworkoutApp.training.services', []).factory('trainingService', function() {
	return {
		plans: [{
			id: 1,
			title: 'Hypertrophy',
			description: 'Beginning hypertrophy training plan with default exercises'   

		}],
		getAll: function() {
			return this.plans;
		}
	}
});