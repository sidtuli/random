var myApp = angular.module('myApp',[]);

myApp.controller('DataController',['$scope','$http','$location', function($scope,$http,$location){
    $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=List_of_capitals_in_the_United_States&rvprop=content&rvsection=1&rvcontentformat=text%2Fx-wiki&callback=JSON_CALLBACK').success(function(data){
        $scope.info=data.query.pages["255627"].revisions[0]['*'];
        $scope.lines = $scope.info.split("\n");
        $scope.display =[];
        $scope.expr = new RegExp(/([A-Z][A-Za-z])\w+(\s[a-z]+)?( ([A-Z][A-Za-z])\w+)?/,"g");
        console.log($scope.lines);
        angular.forEach($scope.lines,function(value){
            if(value != "|-"){
                $scope.display.push(value);
            }
        });
        angular.forEach($scope.display,function(value){
            console.log(value);
        });
        angular.forEach($scope.display, function(value){
            var result = value.match($scope.expr,"g");
            
            console.log(result);
            
        });
        $scope.clean = function(){
            var ret = [];
            for(var i = 0; i < $scope.display.length; i++){
                
                var result = $scope.display[i].match($scope.expr,"g");
                if(i < 6 || result == null){
                    
                }  else {
                    ret.push(result);
                }
            }
            return ret;
        };
        $scope.cleansed = $scope.clean();
        console.log($scope.display.length);
        console.log($scope.cleansed.length);
        //console.log($scope.regulars);
    });
    
}]);