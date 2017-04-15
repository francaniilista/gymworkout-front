var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
	framework: 'jasmine',
	specs: ['../test/e2e/*.js'],
	capabilities: {
		'browserName': 'chrome'
	},
	allScriptsTimeout: 11000,

	baseUrl: 'http://localhost:8000/',

	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true,
		defaultTimeoutInterval: 10000
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
