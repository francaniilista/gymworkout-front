'use strict';

describe('trainingService tests\n',function() {
	var plan = {
		title: 'Fitness Body',
		description: 'Test training plan',
	};

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

	it('trainingService should save an training plan object', inject(
		function(trainingService) {
			expect(plan.id).not.toBeDefined();
			expect(plan.image).toBe(undefined);
			trainingService.save(plan);
			plan = trainingService.getTrainingPlanById(3);
			expect(plan.id).toBe(3);
			expect(plan.image).toBeDefined();
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
});