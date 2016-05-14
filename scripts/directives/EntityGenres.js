angular
    .module("webAppJeviteca")
    .directive("entityGenres", function() {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/EntityGenres.html",
            scope: {
                genre: "="
            }
        };
    });
