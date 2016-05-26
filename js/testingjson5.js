var myApp = angular.module('myApp',[]);

myApp.controller('DataController', ['$scope','$http','$location', function($scope,$http,$location){
    $scope.drug='';
    //$scope.brand='';
    $scope.generic='';
    $scope.purpose='';
    $scope.effects='';
    $scope.search = function(){
        $http.get("https://api.fda.gov/drug/label.json?search=brand_name:"+$scope.drug).success(function(data) {
            console.log('hello');
            $scope.generic = data.results[0].openfda.generic_name[0];
            $scope.purpose = data.results[0].purpose[0];
    });
        $http.get("https://api.fda.gov/drug/event.json?search=brand_name:"+$scope.drug).success(function(data){
            $scope.effects = data.results[0].patient.reaction[0].reactionmeddrapt;
        });
    };
    
}]);