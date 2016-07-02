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
    when('/amniota',{
        templateUrl:'phyl/amniota.html',
        controller:'acontroller'
    }).
    when('/chondrichthyes',{
        templateUrl:'phyl/chondrichthyes.html',
        controller:'acontroller'
    }).
    when('/gnathostomata',{
        templateUrl:'phyl/gnathostomata.html',
        controller:'acontroller'
    }).
    when('/sarcopterygii',{
        templateUrl:'phyl/sarcopterygii.html',
         controller:'acontroller'
    }).
    when('/tetrapoda',{
        templateUrl:'phyl/tetrapoda.html',
        controller:'acontroller'
    }).
    when('/tetrapoda2',{
        templateUrl:'phyl/tetrapoda2.html',
        controller:'acontroller'
    }).
    when('/sauria',{
        templateUrl:'phyl/sauria.html',
        controller:'acontroller'
    }).
    when('/scleroglossa',{
        templateUrl:'phyl/scleroglossa.html',
        controller:'acontroller'
    }).
    when('/choanata',{
        templateUrl:'phyl/choanata.html',
        controller:'acontroller'
    }).
    when('/synapsida',{
        templateUrl:'phyl/synapsida.html',
        controller:'acontroller'
    }).
    when('/craniata',{
        templateUrl:'phyl/craniata.html',
        controller:'acontroller'
    }).
    when('/craniata2',{
        templateUrl:'phyl/craniata2.html',
        controller:'acontroller'
    }).
    when('/deuterostomia',{
        templateUrl:'phyl/deuterostomia.html',
        controller:'acontroller'
    }).
    when('/mammalia',{
        templateUrl:'phyl/mammalia.html',
        controller:'acontroller'
    }).
    when('/metazoa',{
        templateUrl:'phyl/metazoa.html',
        controller:'acontroller'
    }).
    when('/sauropsida',{
        templateUrl:'phyl/sauropsida.html',
        controller:'acontroller'
    }).
    otherwise({
        redirectTo: '/acanthodii'
    });
    
}]);

phylogeny.controller('acontroller',function($scope,$location){
    
    $scope.addClick = function(elt) {
        console.log(elt.id);
        elt.onclick = function() {
            
            //$location.path('/osteichthyes');
            console.log(elt.id);
            window.location.href = "#/"+elt.id;
        }
        //console.log(elt.onclick);
    }
    //$scope.go();
    
    var a = document.getElementById("svg");
    a.addEventListener('load', loadSVG(a), false);
    //console.log(document.getElementById("svg"))
    function loadSVG(svgElt) {
        //console.log(svgElt);
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

