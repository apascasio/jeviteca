angular.module("webAppJeviteca")
    .controller("BandsCtrl", function($scope, Bands){

    $scope.bands = Bands.data;

});
