'use strict'

angular.module('gymworkoutApp.training.services', [])
	.factory('trainingService', function() {
		var defaultImage = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
		var plans = [
			{
				id: 1,
				title: 'Hypertrophy',
				description: 'Beginning hypertrophy training plan with default exercises',
				image: defaultImage

			},
			{
				id: 2,
				title: 'Weight loss',
				description: 'Training plan for weight loss purpose',
				image: defaultImage
			}
		];

		var isEqual = function (id, element) {
			return id === element.id;
		};

		return {		
			getAll: function() {
				console.log('trainingService: returning all training plans.');
				return plans;
			},

			getTrainingPlanById: function(id) {
				var plan = null;
				for (var i = 0; i <= plans.length; i++) {
					if (isEqual(id, plans[i])) {
						plan = plans[i];
						break;
					}
				}
				console.log('trainingService: returning training plan: ' + JSON.stringify(plan));
				return plan;
			},

			save: function (plan) {
				if (plan != null) {
					plan.id = plans.length + 1;
					if (plan.image == null) {
						plan.image = defaultImage;
					}
					plans.push(plan);
					console.log('Plan saved: ' + JSON.stringify(plan));
				}
			},

			removeById: function (id) {
				if (plans.length > 0 && id >= 0) {
					var i;
					for (i = 0; i <= plans.length; i++) {
						if (isEqual(id, plans[i])) {
							break;
						}
					}
					var plan = plans[i];
					plans.splice(i, 1);
					console.log('Plan removed: ' + JSON.stringify(plan));
				}
			},

			update: function(plan) {
				if (plan != undefined && plan != null) {
					for (var i = 0; i <= plans.length; i++) {
						if (isEqual(id, plans[i])) {
							plans[i];
							break;
						}
					}	
				}
			}
		}
});