var regApp = angular.module('regApp',[]);

regApp.controller('regionController',['$scope',function($scope){
    $scope.data = '';
    $scope.print = function() {
        //console.log($scope.data);
        try {
            var parsed = JSON.parse($scope.data);
        } catch (err) {
            $scope.info = "INVALID: INPUT NOT A JSON";
            
        }
        try {
            $scope.regions = [];
            
            angular.forEach(parsed.paths, function(val, key){
                $scope.regions.push("\""+key +"\":\""+val.name+"\",");
                console.log(key +" "+val.name);
               
            });
            
        } catch (err) {
            $scope.info = "INVALID: JSON NOT IN PROPER FORMAT FOR JQUERY VECTOR MAP REGIONS";
        }
    
        
        
    };
}]);