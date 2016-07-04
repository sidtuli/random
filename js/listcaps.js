var listCapApp = angular.module('listCapApp',[]);

listCapApp.controller('capController',['$scope','geoService','listParser',function($scope,geoService,listParser){
    $scope.search = function(){
        countryCodes = listParser.parse(JSON.parse($scope.country));
        console.log(countryCodes);
        var capitals = geoService.getCaps(countryCodes);
        var arr=[];
        capitals.then(function(d){
            //console.log(d);
            $scope.list = d;
        });
        //var listElts = [];
        
        /**/
        //console.log(capitals)
        //$scope.list = listElts;
        //console.log(listElts)
    };
    $scope.country;
    $scope.info = "";
    $scope.list;
}]);
listCapApp.service('geoService', function($http){
    this.getCap = function(countryCode) {
        return $http.get('http://api.geonames.org/countryInfoJSON?country='+countryCode+"&username=stuli")
            .then(function(d){
            //console.log(d.data.geonames);
            
            return d.data.geonames[0].capital;
        });
    };
    this.getCaps = function(codes) {
        var arr = [];
        var result = "";
        for(i = 0; i < codes.length; i++) {
            result += "country="+codes[i]+"&"
        }
        return $http.get('http://api.geonames.org/countryInfoJSON?'+result+"username=stuli").then(function(d){
            console.log(d.data.geonames);
            var iter = d.data.geonames;
            var results = [];
            for(i = 0; i < iter.length;i++) {
                results.push("\""+iter[i].countryCode.toLowerCase()+"\":\""+iter[i].capital+"\",");
                console.log(iter[i].capital);
            }
            console.log(results);
            return results;
        });
        
    }
});
listCapApp.service('listParser', function(){
    this.parse= function(list){
        var arr = [];
        for(var key in list){
            //console.log(key);
            arr.push(key);
        }
        return arr;
    };
});
