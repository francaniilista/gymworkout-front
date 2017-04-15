module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		karma: {
			options: {
				configFile: 'config/karma-conf.js'
			},
			unit: {
				singleRun: true
			}
		},

		connect: {
			options: {
				port: 8000,
				hostname: 'localhost'
			},
			test: {
				options: {
					base: ['app']
				}
			}
		},

		protractor: {
			options: {
				configFile: 'config/protractor-conf.js',
				keepAlive: true,
				noColor: false,
				args: {}
			},
			all: {}	
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-protractor-runner');

	grunt.registerTask('test', ['karma', 'connect:test', 'protractor']);
};