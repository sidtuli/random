window.onload = function(){
    addNum();
}

function supportsLocalStorage(){
    try{
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        
        return false;
    }
}
function addNum() {
    if(supportsLocalStorage()){
        if(localStorage.getItem("num") === null){
            localStorage.setItem("num",1);
        } else {
            var num = parseInt(localStorage.getItem("num"));
            localStorage.setItem("num",num + 1);
        }
        document.getElementById('shownum').innerHTML = "You have visited "+localStorage.getItem("num")+" times.";
    } else{
        document.getElementById('shownum').innerHTML = "Can't use local storage!";
    }
}