angular.module("webAppJeviteca").controller("DetailBandCtrl", function($scope, $window, Band, Configuracion) {

    $scope.band = Band;

    $scope.fn = {
        goBack: function() {
            $window.history.back();
        }
    };


    });

