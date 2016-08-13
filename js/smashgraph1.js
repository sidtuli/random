window.onload = function(){
    var lineChartData = {
        labels: ["#1","#2","#3","#4","#5","#6"],
        datasets: [{
            label:"Little Mac",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,0,0,1)",
            pointColor: "rgba(0,0,0,1)",
            data: [2,1,3,2,9,4]
        }, {
            label:"Ike",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,0,127,1)",
            pointColor: "rgba(0,0,127,1)",
            data: [3,2,2,5,7,5]
        },{
            label:"Ganondorf",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,0,255,1)",
            pointColor: "rgba(0,0,255,1)",
            data: [7,6,1,9,1,1]
        },{
            label:"Mario",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(127,0,0,1)",
            pointColor: "rgba(127,0,0,1)",
            data: [4,3,6,7,6,3]
        },{
            label:"Kirby",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(255,0,0,1)",
            pointColor: "rgba(255,0,0,1)",
            data: [5,7,4,13,4,2]
        },{
            label:"Dr Mario",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,127,0,1)",
            pointColor: "rgba(0,127,0,1)",
            data: [10,5,5,1,3,13]
        },{
            label:"Bowser",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,255,0,1)",
            pointColor: "rgba(0,255,0,1)",
            data: [9,9,7,4,5,7]
        },{
            label:"Toon Link",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(127,127,0,1)",
            pointColor: "rgba(127,127,0,1)",
            data: [1,8,11,6,8,8]
        },{
            label:"Pacman",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(127,127,127,1)",
            pointColor: "rgba(127,127,127,1)",
            data: [11,10,13,3,2,6]
        },{
            label:"Pikachu",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(255,127,0,1)",
            pointColor: "rgba(255,127,0,1)",
            data: [6,11,9,8,10,9] 
        },{
            label:"Wii Fit Trainer",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(255,255,0,1)",
            pointColor: "rgba(255,255,0,1)",
            data: [8,4,8,11,12,11]  
        },{
            label:"Samus",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(255,255,127,1)",
            pointColor: "rgba(255,255,127,1)",
            data: [13,12,14,10,13,10]  
        },{
            label:"Robin",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,0,0,1)",
            pointColor: "rgba(255,255,255,1)",
            data: [12,13,10,14,11,14]
        },{
            label:"Zero Suit Samus",
            fillColor: "rgba(255,255,255,0)",
            strokeColor: "rgba(0,255,255,1)",
            pointColor: "rgba(0,255,255,1)",
            data: [14,14,12,12,14,12]
        }]

    }

    //Chart.defaults.global.animationSteps = 50;
    Chart.defaults.global.tooltipYPadding = 16;
    Chart.defaults.global.tooltipCornerRadius = 0;
    Chart.defaults.global.tooltipTitleFontStyle = "normal";
    Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
    //Chart.defaults.global.animationEasing = "easeOutBounce";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.scaleLineColor = "black";
    Chart.defaults.global.scaleFontSize = 16;
    Chart.defaults.global.scaleOverride = true;
    Chart.defaults.global.scaleSteps = 7;
    Chart.defaults.global.scaleStepWidth = 2;
    Chart.defaults.global.scaleStartValue = 0;

    var ctx = document.getElementById("canvas").getContext("2d");
    var LineChart = new Chart(ctx).Line(lineChartData, {
        pointDotRadius: 10,
        bezierCurve: false,
        scaleShowVerticalLines: false,
        scaleGridLineColor: "black"
    });
    document.getElementById("legend").innerHTML = LineChart.generateLegend();
}
