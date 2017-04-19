'use strict';

describe('trainingService tests\n',function() {
	var testPlan = {
		title: 'Fitness Body',
		description: 'Test training plan'
	};

	var image = 'data:image/png;base64,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';

	var workouts = [{
		id: 1,
		name: 'Workout A',
		description: 'Chest and triceps'
	}]; 

	beforeEach(module('gymworkoutApp.training.services'));
	
	it('trainingService should return 2 training plan objects', inject(
		function(trainingService) {
			expect(trainingService.getAll().length).toBe(2);
		}
	));

	it('trainingService should return one object for id 2',inject(
		function(trainingService) {
			var plan = trainingService.getTrainingPlanById(2);
			expect(plan).not.toBe(undefined);
			expect(plan).not.toBe(null);
		}
	));

	it('trainingService training plan does not exist', inject(
		function(trainingService) {
			var plan = trainingService.getTrainingPlanById(0);
			expect(plan).toBe(null);
		}
	));

	it('trainingService invalid training plan', inject(
		function(trainingService) {
			var plan = trainingService.getTrainingPlanById(-1);
			expect(plan).toBe(null);
		}
	));

	it('trainingService should save a training plan object', inject(
		function(trainingService) {
			expect(testPlan.id).not.toBeDefined();
			expect(testPlan.image).toBe(undefined);
			trainingService.save(testPlan);
			var plan = trainingService.getTrainingPlanById(3);
			expect(plan.id).toBe(3);
			expect(plan.image).toBeDefined();
		}
	));

	it('trainingService saving invalid training plan', inject(
		function(trainingService) {
			expect(trainingService.getAll().length).toBe(2);
			trainingService.save(null);
			expect(trainingService.getAll().length).toBe(2);
		}
	));

	it('trainingService saving valid training plan with defined image', inject(
		function(trainingService) {
			testPlan.image = undefined;
			expect(testPlan.image).toBe(undefined);
			testPlan.image = image;
			expect(testPlan.image).toBeDefined();

			expect(trainingService.getAll().length).toBe(2);
			trainingService.save(testPlan);
			expect(trainingService.getAll().length).toBe(3);

		}
	));

	it('trainingService should remove a valid training plan object', inject(
		function(trainingService) {
			expect(trainingService.getAll().length).toBe(2);
			trainingService.removeById(1);
			expect(trainingService.getAll().length).toBe(1);
		}
	));

	it('trainingService should not remove an invalid training plan object id', inject(
		function(trainingService) {
			expect(trainingService.getAll().length).toBe(2);
			trainingService.removeById(-1);
			expect(trainingService.getAll().length).toBe(2);
		}
	));

	it('trainingService should update a valid training plan', inject(
		function (trainingService) {
			var firstPlan = trainingService.getTrainingPlanById(1);
			expect(firstPlan.workouts).toBe(undefined);
			firstPlan.workouts = workouts;
			expect(firstPlan.workouts).not.toBe(undefined);

			trainingService.update(firstPlan);
			expect(trainingService.getTrainingPlanById(1)).not.toBe(undefined);
		}
	));
});