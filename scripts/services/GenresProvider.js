angular.module("webAppJeviteca").service("GenresProvider",function($http, Configuracion){
    this.getGenres = function() {

        return  $http.get(Configuracion.routeData +"genres.json");


    };
});


