var phylogeny = angular.module('phylogeny',['ngRoute']);

phylogeny.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    
    when('/acanthodii',{
        templateUrl: 'phyl/acanthodii.html',
        controller: 'acontroller'
    }).
    when('/osteichthyes',{
        templateUrl: 'phyl/osteichthyes.html',
        controller: 'acontroller'
    }).
    otherwise({
        redirectTo: '/acanthodii'
    });
    
}]);

phylogeny.controller('acontroller',function($scope,$location){
    $scope.go = function() {
        console.log("Hello!");
    }
    $scope.addClick = function(elt) {
        elt.onclick = function() {
            
            $location.path('/osteichthyes');
            console.log(elt.id);
            window.location.href = "#/osteichthyes"
        }
        console.log(elt.onclick);
    }
    //$scope.go();
    
    var a = document.getElementById("svg");
    a.addEventListener('load', loadSVG(a), false);
    
    function hello() {
        console.log("loaded!");
        console.log(document.getElementById("svg"))
        console.log(a);
        console.log(a.getElementsByClassName("st0"))
    };
    //console.log(document.getElementById("svg"))
    function loadSVG(svgElt) {
        console.log(svgElt);
        console.log(svgElt.getElementsByClassName("st0"))
        var clickables = svgElt.getElementsByClassName("st0");
        for(i = 0; i < clickables.length; i++) {
            $scope.addClick(clickables[i]);
        }
    }
    function addClick(elt) {
        
        /*elt.onclick = function() {
            $location.path('/osteichthyes');
            console.log(elt.id);
        }
        console.log(elt.onclick);*/
    }
    /*var svgDoc = a.contentDocument;
    var s = svgDoc.getElementsByClassName("st0");
                
    for(i = 0; i < s.length; i++) {
        //addClick(s[i]);
        console.log(s[i]);
    }*/
                
                
    /*});
            function addClick(elt) {
                elt.onclick = function(){
                    document.getElementById("svg").data = "imgs/"+elt.id+".svg";
                    
                    var a = document.getElementById("svg");
                    a.addEventListener('load', function(){
                        var svgDoc = a.contentDocument;
                        var s = svgDoc.getElementsByClassName("st0");
                
                        for(i = 0; i < s.length; i++) {
                            addClick(s[i]);
                            console.log(s[i]);
                        }
                        console.log(new Date())
                    })
                    
                }
            }*/
});

