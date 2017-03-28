module.exports = function(config) {
  var configuration = {
    basePath : '../',
    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular-ui-router/release/angular-*.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'app/modules/**/*.js',
      'test/unit/**/*.js'
    ],
    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    plugins : [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  };
  
  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }
 
  config.set(configuration);
};