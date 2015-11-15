angular.module("webAppJeviteca").service("BandsProvider", function($http) {
    this.getBands = function() {

        var datos = $http.get("resources/data/bands.json");
        return datos;

    };
});