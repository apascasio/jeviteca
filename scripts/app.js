


angular.module("webAppJeviteca", ["ngRoute"]);

angular.module("webAppJeviteca").config(function($routeProvider){

    $routeProvider.when("/albums", {
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsProvider", function(AlbumsProvider) {

                return AlbumsProvider.getAlbums();
            }]
        }
    });

    $routeProvider.when("/bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsProvider", function(BandsProvider) {

                return BandsProvider.getBands();
            }]
        }
    });

    $routeProvider.when("/genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html",
        resolve: {

            Genres: ["GenresProvider", function(GenresProvider) {

                return GenresProvider.getGenres();
            }]
        }

    });

/*    $routeProvider.when("/albums/:id/details", {
        controller: "DetailAlbumCtrl",
        templateUrl: "views/DetailAlbum.html",
        resolve: {
            Album: ["AlbumsProvider", "$routeParams", function(AlbumsProvider, $routeParams) {

                return AlbumsProvider.getAlbumById($routeParams.id);
            }]
        }
    });*/


    $routeProvider.when("/bands/:id/details", {
        controller: "DetailBandCtrl",
        templateUrl: "views/DetailBand.html",
        resolve: {
            Band: ["BandsProvider", "$routeParams", function(BandsProvider, $routeParams) {

                return BandsProvider.getBandById($routeParams.id);
            }]
        }
    });

    $routeProvider.otherwise({
        redirectTo:"/albums"
    });

});


