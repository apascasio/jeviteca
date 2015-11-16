angular.module("webAppJeviteca").service("BandsProvider", [ "$http", "$q", "$filter", function($http,$q,$filter) {
    this.getBands = function() {

        var datos = $http.get("resources/data/bands.json");
        return datos;

    };

    this.getBandById = function(bandId) {

        var deferred = $q.defer();

        $http.get("resources/data/bands.json").then(function(data) {

            var element = $filter("filter")(data.data, {"id": bandId})[0];

            deferred.resolve(element);
        });

        return deferred.promise;
    }


}]);