module.exports = function(config) {
  var configuration = {
    basePath : '../',
    files : [
      //including angular files and libs
      'app/lib/angular/angular.js',
      'app/lib/angular-ui-router/release/angular-*.js',
      'app/lib/angular-mocks/angular-mocks.js',

      //including js file
      'app/js/**/*.js',
      'app/modules/**/*.js',

      //including unit test specs
      'test/unit/**/*.js'
    ],
    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],
    autoWatch : false,
    singleRun : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    reporters: ['progress', 'coverage', 'junit'],
    plugins : [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-jshint-preprocessor'
    ],
    preprocessors: {
      'app/js/**/*.js': ['jshint', 'coverage'],
      'app/modules/**/*.js': ['jshint', 'coverage'],
    },
    coverageReporter: {
      type: 'html',
      dir: 'test-results/coverage/',
      file: 'results.html'
    }, 
    junitReporter: {
      outputFile: 'test-results/junit-results.xml'
    }
  };
  config.set(configuration);
};