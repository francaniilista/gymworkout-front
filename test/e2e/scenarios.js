'use strict';

describe('gymworkout-front e2e test\n', function() {
	var EC = protractor.ExpectedConditions;

	beforeEach(function() {
		browser.get('/');
		element(by.id('training')).click();
	});
	
	it('Should list 2 training plans\n', function() {
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

    it('Should update a training plan\n', function() {
        element(by.id('edit')).click();

        var plan = element(by.id('training_2'));
        var title = element(by.id('ttl_2'));
        expect(title.getText()).toEqual('Weight loss');

        plan.click();

        var name = element(by.model('name'));
        browser.wait(EC.visibilityOf(name), 5000);
        
        name.clear().then(function() {
            name.sendKeys('Weight win');
        });

        element(by.id('save-btn')).click();

        expect(title.getText()).toEqual('Weight win');
    });

    it('Should remove a training plan\n', function() {
        var plan = element(by.id('training_2'));
        var title = element(by.id('ttl_2'));
        expect(title.getText()).toEqual('Weight loss');

        element(by.id('remove')).click();
        plan.click();
        element(by.id('remove')).click();

        expect(plan.isPresent()).toBe(false);

        var plans = element.all(by.repeater('plan in plans'));
        expect(plans.count()).toBe(1);
    });

    it('Should open a training plan\n', function() {
        browser.actions().doubleClick(element(by.id('training_1'))).perform();
    });
});