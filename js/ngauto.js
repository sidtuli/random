var ngAutoApp = angular.module("ngAutoApp",["autocomplete"]);

ngAutoApp.controller("ngAutoTestCtlr",function($scope){
    $scope.friends = ["Kevin","Robert","Joseph","Daniel","Alex","Sarah","Jay","Jonah","Aaron","Rafael","Will"];
    $scope.printTyped = function(typed) {
        console.log(typed);
    }
    $scope.addFriend = function(selection) {
        console.log(selection);
    }
});