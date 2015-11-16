angular.module("webAppJeviteca").controller("DetailBandCtrl", ["$scope", "Band", "$window", function ($scope, Band, $window) {
    $scope.band = Band;

    $scope.fn = {
        goBack: function() {
            $window.history.back();
            }
        };
    }]);