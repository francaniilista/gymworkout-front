var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
	allScriptsTimeout: 11000,

	specs: ['../test/e2e/*.js'],

	capabilities: {
		'browserName': 'chrome'
	},

	baseUrl: 'http://localhost:8000/',

	framework: 'jasmine',

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	},
	
	beforeLaunch: function() {
		require('ts-node').register({
			project: './test/e2e/'
		});
	},

	onPrepare: function() {
		jasmine.getEnv().addReporter(new SpecReporter());
	}
};
