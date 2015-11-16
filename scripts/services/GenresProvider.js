angular.module("webAppJeviteca").service("GenresProvider",[ "$http", "$q", "$filter", function($http,$q,$filter) {
    this.getGenres = function() {

        var datos = $http.get("resources/data/genres.json");
        return datos;

    };
}]);