var myApp = angular.module('myApp',[]);

myApp.controller('DataController',['$scope','$http',function($scope,$http){
    $scope.name = '';
    $scope.search = function(){
        $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles='+$scope.name+'&rvprop=content&rvsection=0&rvcontentformat=text%2Fx-wiki&callback=JSON_CALLBACK').success(function(data){
            $scope.data = data.query.pages;
            angular.forEach($scope.data,function(value){
              $scope.data = value.revisions[0]['*'];  
            });
            $scope.deathdate = $scope.data.match($scope.deathdatereg,"g");
            $scope.birthdate = $scope.data.match($scope.birthdatereg,"g");
            $scope.deathplace = $scope.data.match($scope.deathplacereg,"g");
            $scope.birthplace = $scope.data.match($scope.birthplacereg,"g");
        
        });
        $scope.birthdatereg = new RegExp(/{([Bb]irth date(.*?))}/,"g");
        $scope.deathdatereg = new RegExp(/({[Dd]eath date(.*?)})/,"g");
        $scope.deathplacereg = new RegExp(/death_place[ ={}A-z|,\.\u00C0-\u00FF\-]*/,"g");
        $scope.birthplacereg = new RegExp(/birth_place[ ={}A-z|,\.\u00C0-\u00FF\-]*/,"g");
        //new RegExp(/[ ={}\[\]A-z,\.|]*( \|)/,"g");
    };
    
}]);