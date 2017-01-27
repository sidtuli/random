// Holds number of sections(added/deleted) in the schema/page to give each section a unique id
var sectionNum = 0;
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

// Functions and setup meant to execute on load of page
window.onload = function() {
    readSchema();
}
//Function meant to add a roll section to 
function addSection(){
    // Add to section num before adding new section
    sectionNum += 1;
    // Grabes all the input values for the dice and then assigns values to the number of rolls per dice
    dice_params = document.getElementById("d4").value+","+
        document.getElementById("d6").value+","+
        document.getElementById("d8").value+","+
        document.getElementById("d10").value+","+
        document.getElementById("d12").value+","+
        document.getElementById("d20").value+","+
        document.getElementById("d100").value+","+
        document.getElementById("bonus").value+",\""+ document.getElementById("keepNum").value+"\",\""+
        document.getElementById("keepType").value+"\"";
    // Create a new div for the rol section
    new_section = document.createElement("div");
    new_section.setAttribute("id","section_"+sectionNum);
    htmlString = "<span id=\"roll_"+sectionNum+"\"></span>";
    // Makes a button to make the roll
    new_btn = document.createElement("button");
    new_btn.setAttribute("id","btn_"+sectionNum);
    new_btn.textContent = "Roll";
    new_btn.setAttribute("onclick","roll("+sectionNum+","+dice_params+")");
    // Adds the user's title to the roll section
    new_title = document.createElement("h4");
    new_title.innerHTML = document.getElementById("roll_title").value;
    // Adds the button to delete the roll section
    close = document.createElement("button");
    close.setAttribute("class","del");
    close.innerHTML = " X ";
    close.setAttribute("onclick","delSec(section_"+sectionNum+")");
    new_title.appendChild(close);
    // Put title into the roll section
    new_section.appendChild(new_title);
    // Add span to house roll results
    new_section.innerHTML = new_section.innerHTML + htmlString;
    // Add roll button
    new_section.appendChild(new_btn);
    document.getElementById("sections").appendChild(new_section);
}

// Function that acutally appends results of a roll
function roll(secnum,d4count,d6count,d8count,d10count,d12count,d20count,d100count,bonus,keepNum,keepType) {
    
    htmlString = "<span style='color:#9400D3'>"
    
    bonus_string = bonus >= 0 ? "+ "+bonus.toString() : bonus.toString();
    sum = 0;
    // Absolute values for loops to allow negative or positives to loop
    d4loop = Math.abs(d4count);
    d6loop = Math.abs(d6count);
    d8loop = Math.abs(d8count);
    d10loop = Math.abs(d10count);
    d12loop = Math.abs(d12count);
    d20loop = Math.abs(d20count);
    d100loop = Math.abs(d100count);
    // Go through a while loop to add results for each type of dice
    while(d4loop > 0) {
        curr = d4count > 0 ? d4() : -1 * d4();
        sum += curr;
        htmlString += curr.toString() + ", ";
        d4loop -= 1;
    }
    htmlString += "</span><span style='color:blue'>"
    while(d6loop > 0) {
        curr = d6count > 0 ? d6() : -1 * d6();
        sum += curr;
        htmlString += curr.toString() + ", ";
        d6loop -= 1;
    }
    htmlString += "</span><span style='color:green'>"
    while(d8loop > 0) {
        curr = d8count > 0 ? d8() : -1 * d8();
        sum += curr;
        htmlString += curr.toString() + ", ";
        d8loop -= 1;
    }
    htmlString += "</span><span style='color:#FADA5E'>"
    while(d10loop > 0) {
        curr = d10count > 0 ? d10(): -1 * d10();
        sum += curr;
        htmlString += curr.toString() + ", ";
        d10loop -= 1;
    }
    htmlString += "</span><span style='color:orange'>"
    while(d12loop > 0) {
        curr = d12count > 0 ? d12() : -1 * d12();
        sum += curr;
        htmlString += curr.toString() + ", ";
        d12loop -= 1;
    }
    htmlString += "</span><span style='color:red'>"
    while(d20loop > 0) {
        curr = d20count > 0 ? d20() : -1 * d20();
        sum += curr;
        htmlString += curr.toString() +", ";
        d20loop -= 1;
    }
    htmlString += "</span><span style='color:gray'>"
    while(d100loop > 0) {
        curr = d100count > 0 ? d100() : -1 * d100();
        sum += curr;
        htmlString += curr.toString() + ", ";
        d100loop -= 1;
    }
    // Add the flat bonus and sum at the end
    htmlString += "</span>Sum("+bonus_string+") = " + (sum+bonus).toString();
    // We then put the html string of results into the corresponding span
    document.getElementById("roll_"+secnum.toString()).innerHTML = htmlString;
}

// Function to read in all possible schema from local storage
function readSchema() {
    if(supportsLocalStorage() && localStorage.getItem("schema") != null) {
        schema = localStorage.getItem("schema").split(",");
        for(i = 0; i < schema.length; i++) {
            document.getElementById("schemaOptions").innerHTML += "<option>"+schema[i]+"</option>";
        }
    }
}
// Function to save a schema to local storage
function createSchema() {
    if(supportsLocalStorage()) {
        name = document.getElementById("newSchemaName").value;
        
        localStorage.setItem("schema_"+name,"");
        
        storedSchema = localStorage.getItem("schema");
        
        storedSchema = addSchema(storedSchema,name);
        
        localStorage.setItem("schema",storedSchema);
        document.getElementById("sections").innerHTML = "";
        document.getElementById("schemaOptions").innerHTML = "<option></option>";
        readSchema();
        currSchemaOptions = document.getElementsByTagName("option");
        for(i = 0; i < currSchemaOptions.length; i++) {
            if(currSchemaOptions[i].value == name){
                currSchemaOptions[i].setAttribute("selected","selected");
            }
        }
        currSchema = name;
        document.getElementById("schemaTitle").innerHTML = 
            "Current Schema: "+name;
    }
}

function addSchema(prevSchema,schemaName) {
    if(prevSchema == null) {
        return schemaName;
    } else {
        if(alreadyInSchema(schemaName)) {
            return prevSchema;
        } else {
            return prevSchema + "," + schemaName;
        }
    }
}
// Function to check if a certain schema is already in the array of schemas
function alreadyInSchema(schemaName) {
    for(i = 0; i < schema.length; i++) {
        if(schemaName == schema[i]) {
            return true;
        }
    }
    return false;
}