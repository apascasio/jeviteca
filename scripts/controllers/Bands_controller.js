angular.module("webAppJeviteca").controller("BandsCtrl",["$scope", "Bands", function($scope, Bands){

    $scope.bands = Bands.data;

}]);
