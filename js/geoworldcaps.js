var geoApp = angular.module('geoApp',[]);

geoApp.factory('geoFactory',function($http) {
    var arr=[];
        $http({
            url: 'http://api.geonames.org/countryInfoJSON?all&username=stuli',
            dataType:'jsonp',
            method:'POST',
            
        }).success(function(data) {
            angular.forEach(data["geonames"], function(key,value){
                arr.push("'"+key['countryCode'].toLocaleLowerCase()+"':'"+key['capital']+"'")
                //arr[key['fipsCode']] = key['capital'];
                console.log("'"+key['countryCode']+"':'"+key['capital']+"'");
            });
            
            
        });
        /*$http.post('http://api.geonames.org/countryInfoJSON?all&username=stuli',{cache: true}).success(function(data) {
            angular.forEach(data["geonames"], function(key,value){
                arr.push("'"+key['fipsCode'].toLocaleLowerCase()+"':'"+key['capital']+"'")
                //arr[key['fipsCode']] = key['capital'];
                console.log("'"+key['fipsCode']+"':'"+key['capital']+"'");
            });
            
            
        });*/
        //console.log(data["geonames"])
        console.log(arr);
        
    function getCapitals(){
        return arr;
    }
    var service = {
        getCapitals: getCapitals
    };
    
    return service;
});

geoApp.controller('GeoController',['$scope','$http','geoFactory',function($scope,$http,geoFactory){
    $scope.caps = geoFactory.getCapitals();
    $scope.text = "caps";
}]);