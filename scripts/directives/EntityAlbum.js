angular
    .module("webAppJeviteca")
    .directive("entityAlbum", function() {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/EntityAlbum.html",
            scope: {
                album: "="
            }
        };
    });