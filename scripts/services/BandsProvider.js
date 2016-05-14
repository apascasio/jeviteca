angular.module("webAppJeviteca").service("BandsProvider",  function($q, $filter, $http, Configuracion) {
    this.getBands = function() {

        return $http.get(Configuracion.routeData +"bands.json");


    };

    this.getBandById = function(bandId) {

        var deferred = $q.defer();

        $http.get(Configuracion.routeData + "bands.json").then(function(data) {

            var element = $filter("filter")(data.data, {"id": bandId})[0];

            deferred.resolve(element);
        });

        return deferred.promise;
    }

});