
angular.module("webAppJeviteca").controller("AlbumsCtrl",["$scope", "Albums","$filter",  function($scope,Albums ,$filter){
    $scope.albums = $filter("orderBy")( Albums.data, "-year");

}]);

