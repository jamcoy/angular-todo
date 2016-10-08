angular.module('TodoDirective',[])
    .directive('todoTable', function() {
        return {
            restrict: 'E',    // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/todo-table.html'
        };
    })
    .directive('navbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/navbar.html'
        };
    })
;