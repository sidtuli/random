// Variable to save down current schema being used
var currSchema = null;
// Variable to indicate if current scheme should be autosaved
var autoSave = false;
// Variable to save array of schema as objects
var schema = [];
// This prototype function will make an element remove itself
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
 
// A function to check if the client browser can store things locally
function supportsLocalStorage(){
    try{
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// Function that returns the result of a d4 roll
function d4() {
    return Math.floor(Math.random() * 4) + 1;
}
// Function that returns the result of a d6 roll
function d6() {
    return Math.floor(Math.random() * 6) + 1;
}
// Function that returns the result of a d8 roll
function d8() {
    return Math.floor(Math.random() * 8) + 1;
}
// Function that returns the result of a d10 roll
function d10() {
    return Math.floor(Math.random() * 10) + 1;
}
// Function that returns the result of a d12 roll
function d12() {
    return Math.floor(Math.random() * 12) + 1;
}
// Function that returns the result of a d20 roll
function d20() {
    return Math.floor(Math.random() * 20) + 1;
}
// Function that returns the result of a d100 roll
function d100() {
    return Math.floor(Math.random() * 100) + 1;
}