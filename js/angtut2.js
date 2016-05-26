var myApp = angular.module('myApp',[]);
myApp.controller('MainController',['$scope',function($scope){
    $scope.appname = "an angular app";
    $scope.yourname="Siddy";
}]);