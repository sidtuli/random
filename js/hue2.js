window.onload = function(){
    changeColor();
}

function supportsLocalStorage(){
    try{
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function formatTime(){
    var d = new Date();
    var result="#";
    if(d.getHours() < 10) {
        result += "0";
    }
    result += d.getHours().toString();
    if(d.getMinutes() < 10) {
        result += "0";
    }
    result += d.getMinutes().toString();
    if(d.getSeconds() < 10) {
        result += "0";
    }
    result += d.getSeconds().toString();
    //console.log(d.getHours() + " " + d.getMinutes() + " "+d.getSeconds());
    //console.log(result);
    return result;
}
function formatVisit(color) {
    result = color.charAt(1)+color.charAt(2)+":"+color.charAt(3)+color.charAt(4)+":"+color.charAt(5)+color.charAt(6);
    return result;
}
function changeColor() {
    if(supportsLocalStorage()){
        document.getElementById("message").innerHTML = "";
        if(localStorage.getItem("colors") === null){
            localStorage.setItem("colors",formatTime());
            document.body.style.backgroundColor = formatTime();
            document.getElementById("message").innerHTML = "You visited this page at "+formatVisit(formatTime()) +" and got the rgb color: "+formatTime()+"."; 
        } else {
            document.body.removeChild(document.getElementById("message"));
            oldColor = localStorage.getItem("colors");
            localStorage.setItem("colors",oldColor+","+formatTime());
            colors = localStorage.getItem("colors").split(",");
            var i;
            for(i = 0; i < colors.length; i++) {
                var newDiv = document.createElement('div');
                newDiv.innerHTML = "Visit #"+(i+1)+" you arrived at "+formatVisit(colors[i])+" and got the color "+ colors[i];
                newDiv.style.backgroundColor = colors[i];
                document.body.appendChild(newDiv);
            }
            document.body.style.backgroundColor = colors[i-1];
        }
   } else {
        document.body.style.backgroundColor = formatTime();
   }
}