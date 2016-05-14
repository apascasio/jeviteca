angular.module("webAppJeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular
    .module("webAppJeviteca")
    .config(["$routeProvider", "$routeSegmentProvider", function($routeProvider, $routeSegmentProvider) {


    $routeSegmentProvider.when("/bands", "bands");
    $routeSegmentProvider.when("/bands/:id/details", "details_band");
    $routeSegmentProvider.when("/albums", "albums");
    $routeSegmentProvider.when("/genres", "genres");


    $routeSegmentProvider.segment("albums", {
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsProvider", function(AlbumsProvider) {
                return AlbumsProvider.getAlbums();
            }]
        }
    });

    $routeSegmentProvider.segment("bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsProvider", function(BandsProvider) {
                return BandsProvider.getBands();
            }]
        }
    });

    $routeSegmentProvider.segment("details_band", {
        controller: "DetailBandCtrl",
        templateUrl: "views/DetailBands.html",
        resolve: {
            Band: ["$routeParams", "BandsProvider", function($routeParams, BandsProvider) {
                return BandsProvider.getBandById($routeParams.id);
            }]
        }

    });






    $routeSegmentProvider.segment("genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["GenresProvider", function(GenresProvider) {
                return GenresProvider.getGenres();
            }]
        }
    });

    $routeProvider.otherwise({
        redirectTo: "/genres"
    });

}]);