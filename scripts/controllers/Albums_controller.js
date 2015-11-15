
angular.module("webAppJeviteca").controller("AlbumsCtrl",["$scope", "Albums",  function($scope,Albums){
    $scope.albums = Albums.data;


}]);

