angular
    .module("webAppJeviteca")
    .directive("entityBand", function() {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/EntityBands.html",
            scope: {
                band: "="
            }
        };
    });
