angular.module("webAppJeviteca").service("AlbumsProvider", function($http) {
        this.getAlbums = function() {

            var datos = $http.get("resources/data/albums.json");
            return datos;

            };
    });