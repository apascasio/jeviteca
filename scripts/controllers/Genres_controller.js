angular.module("webAppJeviteca")
    .controller("GenresCtrl", function($scope, Genres){

    $scope.genres = Genres.data;

});


