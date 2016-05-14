
angular
    .module("webAppJeviteca")
    .directive("searchbox", function() {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/SearchBox.html",
            scope: {
                ngModel: "="
            }
        };
    });
