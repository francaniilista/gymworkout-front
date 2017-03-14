'use strict';

/* App Module */

angular.module('gymworkoutApp', [
    'ngResource',
    'ui.router',
    'gymworkoutApp.overview',
    'gymworkoutApp.training']);

angular.module('gymworkoutApp').run(['$state',
    function($state) {
        $state.go('overview.all');
    }
]);