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
    console.log(d.getHours() + " " + d.getMinutes() + " "+d.getSeconds());
    console.log(result);
    return result;
}
function formatVisit(color) {
    result = color.charAt(1)+color.charAt(2)+":"+color.charAt(3)+color.charAt(4)+":"+color.charAt(5)+color.charAt(6);
    return result;
}
function changeColor() {
    if(supportsLocalStorage()){
        if(localStorage.getItem("color") === null){
            localStorage.setItem("color",formatTime());
            document.body.style.backgroundColor = formatTime();
            document.getElementById("message").innerHTML = "You first visited this page at "+formatVisit(formatTime()) +" and got the rgb color: "+formatTime()+".";
        } else {
            document.body.style.backgroundColor = localStorage.getItem("color");
            document.getElementById("message").innerHTML = "You first visited this page at "+formatVisit(localStorage.getItem("color")) +" and got the rgb color: "+localStorage.getItem("color")+".";
        }
   } else {
        document.body.style.backgroundColor = formatTime();
   }
}