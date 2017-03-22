'use strict';

/* App Module */

var gymworkoutApp = angular.module('gymworkoutApp', [
    'ngResource',
    'ui.router',
    'angularModalService',
    'gymworkoutApp.overview',
    'gymworkoutApp.training']);

gymworkoutApp.run(['$state',
    function($state) {
        $state.go('overview.all');
    }
]);