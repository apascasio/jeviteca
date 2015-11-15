angular.module("webAppJeviteca").service("GenresProvider", function($http) {
    this.getGenres = function() {

        var datos = $http.get("resources/data/genres.json");
        return datos;

    };
});