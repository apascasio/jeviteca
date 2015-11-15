


angular.module("webAppJeviteca", ["ngRoute"]);

angular.module("webAppJeviteca").config(function($routeProvider){

    $routeProvider.when("/albums", {
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html"
        /*resolve: {
            Albums: ["AlbumsProvider", function(AlbumsProvider) {

                return AlbumsProvider.getAlbums();
            }]
        }*/
    });

    $routeProvider.when("/bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html"
    });

    $routeProvider.when("/genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html"
    });


    $routeProvider.otherwise({
        redirectTo:"/albums"
    });

});

