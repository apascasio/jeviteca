angular.module("webAppJeviteca").service("AlbumsProvider", [ "$http", "$q", "$filter",function($http,$q,$filter) {
        this.getAlbums = function() {

            var datos = $http.get("resources/data/albums.json");
            return datos;

            };


        this.getAlbumById = function(albumId) {
            var deferred = $q.defer();
            $http.get("resources/data/albums.json").then(function(data) {
                var element = $filter("filter")(data.data, {"id": albumId})[0];
                deferred.resolve(element);
            });
            return deferred.promise;
        };





}]);