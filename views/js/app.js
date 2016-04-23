var app = angular.module('app', ['ui.bootstrap']);
        
app.controller('ToolsListController', function($scope, $location, toolsListFactory) {

  
});

app.factory('toolsListFactory', function($http) {
     return{
        checkout : function(id) {
            return $http({
                url: '/checkout',
                method: 'POST',
                data: id,
                 headers: {
                   'Content-Type': 'application/json'
                 }
            })
        }
     }
});