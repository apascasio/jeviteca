
angular
    .module("webAppJeviteca")
    .controller("Navegacion_controller", function($scope, $routeSegment) {

        $scope.routeIsBands = function() {
            return $routeSegment.startsWith("bands");
        };

        $scope.routeIsAlbums = function() {
            return $routeSegment.startsWith("albums") ;
        };

        $scope.routeIsGenres = function() {
            return $routeSegment.startsWith("genres");
        };
    });