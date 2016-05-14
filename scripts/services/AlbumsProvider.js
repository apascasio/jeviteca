angular.module("webAppJeviteca").service("AlbumsProvider", function($q, $filter, $http, Configuracion) {
        this.getAlbums = function() {

            return $http.get(Configuracion.routeData +"albums.json");


            };


        this.getAlbumById = function(albumId) {
            var deferred = $q.defer();
            $http.get(Configuracion.routeData +"albums.json").then(function(data) {
                var element = $filter("filter")(data.data, {"id": albumId})[0];
                deferred.resolve(element);
            });
            return deferred.promise;
        };





});