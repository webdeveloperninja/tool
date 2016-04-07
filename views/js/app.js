var app = angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'partials/tool-list.html',
            controller: 'toolsListController'
        }).otherwise({
            templateUrl: 'partials/tool-list.html',
            controller: 'toolsListController'
})});
        
app.controller('toolsListController', function($scope) {
    
});