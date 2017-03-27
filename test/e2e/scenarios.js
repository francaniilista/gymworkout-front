'use strict';

describe('gymworkout-front e2e test\n', function() {
	var EC = protractor.ExpectedConditions;

	beforeEach(function() {
		browser.get('/');
		element(by.id('workouts')).click();
	});
	
	it('Should have 2 training plans\n', function() {
        var plans = element.all(by.repeater('plan in plans'));
        expect(plans.count()).toBe(2);
    });
	
	it('Should add a training plan\n', function() {
        element(by.id('add')).click();

        var name = element(by.model('name'));
        var description = element(by.model('description'));

		browser.wait(EC.visibilityOf(name), 5000);
        
        name.sendKeys('Example training plan name');
        description.sendKeys('Example training plan description');

        element(by.id('save-btn')).click();

        var plans = element.all(by.repeater('plan in plans'));
        expect(plans.count()).toBe(3);
    });
});