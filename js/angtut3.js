var myApp = angular.module('myApp',[]);
myApp.controller('MainController',['$scope',function($scope){
    $scope.appname = "an angular app";
    $scope.yourname="Siddy";
    $scope.friendlist = ['Steven','Steve','Stephen','Steph']
    $scope.emails = [
        {
            "name":"Steven",
            "email":"st@even.net"
        },
        {
            "name":"Steve",
            "email":"st@eve.online"
        },
        {
            "name":"Stephen",
            "email":"st@phen.hen"
        },
        {
            "name":"Steph",
            "email":"st@pheasan.ts"
        }
    ]
}]);