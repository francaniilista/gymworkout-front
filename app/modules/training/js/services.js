'use strict'
angular.module('gymworkoutApp.training.services', []).factory('trainingService', function() {
	var defaultImage = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
	return {		
		plans: [{
			index: 1,
			title: 'Hypertrophy',
			description: 'Beginning hypertrophy training plan with default exercises',
			image: defaultImage

		},{
			index: 2,
			title: 'Weight loss',
			description: 'Training plan for weight loss purpose',
			image: defaultImage
		}],
		
		getAll: function() {
			return this.plans;
		},

		save: function (plan) {
			if (plan != null) {
				if (plan.image == null) {
					plan.image = defaultImage;
				}
				this.plans.push(plan);
				console.log('Plan saved: ' + JSON.stringify(plan));
			}
		},

		remove: function (index) {
			if (this.plans.length > 0) {
				if (index >= 0) {
					var plan = this.plans[index];
					this.plans.splice(index, 1);
					console.log('Plan deleted: ' + JSON.stringify(plan));
				}
			}
		}
	}
});