// Set an inital section number of 0
var sectionNum = 0;

// A function to check if the client browser can store things locally
function supportsLocalStorage(){
    try{
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// Function to save all current dice rolling sections
function saveSections(){
    // Grab the html string of all dice roll sections
    die = document.getElementById("sections").innerHTML.toString();
    // Then if we can store it, we store the th html string and section num
    if (supportsLocalStorage()) {
        // Store html string and section number
        localStorage.setItem("die",die)
        localStorage.setItem("sectionNum",sectionNum) 
    }
}

// When the window loads just immediately reset the roll sections and insert them into document
window.onload = function() {
    if (supportsLocalStorage()) {
        // See if there is already a saved html string of dice sections
        sectionNum = parseInt(localStorage.getItem("sectionNum"));
        if(localStorage.getItem("die") != null) {
            // Grabs the html string of all dice sections
            die = localStorage.getItem("die");
            // Collect all matches for sections from the storage that contain rolls to be cleared out
            matches = [];
            regex = new RegExp(/<span id="(roll_[\d]*)"><span style="color:#9400D3">[\d ,]*<\/span><span style="color:blue">[\d ,]*<\/span><span style="color:green">[\d ,]*<\/span><span style="color:#FADA5E">[\d ,]*<\/span><span style="color:orange">[\d ,]*<\/span><span style="color:red">[\d ,]*<\/span><span style="color:gray">[\d ,]*<\/span>[Sum \(+-\d\) =]*<\/span>/,'g');
                
            // Actuallly execute the regex and find the first match
            var match_result = regex.exec(die);
            // This while loop goes through the entire string and finds every match and puts it into matches array
            while(match_result != null) {
                matches.push(match_result[0])
                matches.push(match_result[1])
                match_result = regex.exec(die);
            }
            
            // Go through all the matches and then replace them with new 
            for(i = 0; i < matches.length; i+= 2) {
                replace_str = "<span id='"+matches[i+1]+"'></span>";
                die = die.replace(matches[i],replace_str);
            }
            document.getElementById("sections").innerHTML = die;
            localStorage.setItem("die",die);
        }
    }
}

// This prototype function will make an element remove itself
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

// This function deletes a roll section once given its id
function delSec(sec_id){
    // Calss prototype remove function on the section
    sec_id.remove();
    // Then we save the roll sections after the section is removed
    saveSections();
}

// This function adds a roll section to the page
function addSec() {
    // Increments the section num
    sectionNum += 1;
    // Grabs all the input values for the dice and then assigns values to number of rolls per dice 
    dice_arr = document.getElementsByClassName("dice");
    for(i = 0; i < dice_arr.length; i++) {
        dice_arr[i].value = dice_arr[i].value > 0 ? dice_arr[i].value : 0;
    }
    dice_result = dice_arr[0].value+","+
                   dice_arr[1].value+","+
                   dice_arr[2].value+","+
                   dice_arr[3].value+","+
                   dice_arr[4].value+","+
                   dice_arr[5].value+","+
                   dice_arr[6].value;
    // Creates a new div for the roll section
    new_section = document.createElement("div")
    new_section.setAttribute("id","section_"+sectionNum)
    htmlString = "<span id=\"roll_"+sectionNum+"\"></span>"
    // Makes a new button to roll all the dice
    new_btn = document.createElement("button")
    new_btn.setAttribute("id","btn_"+sectionNum)
    btn_id = "btn_"+sectionNum
    new_btn.textContent = "roll"
    // Adds the user's title to the roll section
    new_title = document.createElement("h4")
    new_title.innerHTML = document.getElementById("roll_title").value;
    // Adds the button to delete a roll section
    close = document.createElement("button");
    close.setAttribute("class","del");
    close.style.color = "red";
    close.innerHTML = " ✕ ";
    close.setAttribute("onclick","delSec(section_"+parseInt(sectionNum).toString()+")")
    new_title.appendChild(close);
    // Appends title to section 
    new_section.appendChild(new_title);
    // Adds span to house roll results
    new_section.innerHTML = new_section.innerHTML + htmlString;
    // Appends roll button
    new_section.appendChild(new_btn)
    document.getElementById("sections").appendChild(new_section)
    var currSec = sectionNum;
    
    var bonus = ","+document.getElementById("bonus").value.toString();
    //console.log(dice_result.toString())
    onclick_attr = "roll("+currSec.toString()+","+dice_result.toString()+bonus.toString()+")";
    document.getElementById(btn_id).setAttribute("onclick",onclick_attr)
    saveSections();
}
// Function that acutally appends results of a roll
function roll(secnum,d4count,d6count,d8count,d10count,d12count,d20count,d100count,bonus) {
    
    htmlString = "<span style='color:#9400D3'>"
    
    bonus_string = bonus >= 0 ? "+ "+bonus.toString() : bonus.toString();
    sum = 0
    // Go through a while loop to add results for each type of dice
    while(d4count > 0) {
        curr = d4()
        sum += curr
        htmlString += curr.toString() + ", "
        d4count -= 1
    }
    htmlString += "</span><span style='color:blue'>"
    while(d6count > 0) {
        curr = d6()
        sum += curr
        htmlString += curr.toString() + ", "
        d6count -= 1
    }
    htmlString += "</span><span style='color:green'>"
    while(d8count > 0) {
        curr = d8()
        sum += curr
        htmlString += curr.toString() + ", "
        d8count -= 1
    }
    htmlString += "</span><span style='color:#FADA5E'>"
    while(d10count > 0) {
        curr = d10()
        sum += curr
        htmlString += curr.toString() + ", "
        d10count -= 1
    }
    htmlString += "</span><span style='color:orange'>"
    while(d12count > 0) {
        curr = d12()
        sum += curr
        htmlString += curr.toString() + ", "
        d12count -= 1
    }
    htmlString += "</span><span style='color:red'>"
    while(d20count > 0) {
        curr = d20()
        sum += curr
        htmlString += curr.toString() +", "
        d20count -= 1
    }
    htmlString += "</span><span style='color:gray'>"
    while(d100count > 0) {
        curr = d100()
        sum += curr
        htmlString += curr.toString() + ", "
        d100count -= 1
    }
    // Add the flat bonus and sum at the end
    htmlString += "</span>Sum("+bonus_string+") = " + (sum+bonus).toString()
    // We then put the html string of results into the corresponding span
    document.getElementById("roll_"+secnum.toString()).innerHTML = htmlString
}
// Function returns result of a d4 roll
function d4() {
    return Math.floor(Math.random() * 4) + 1;
}
// Function returns result of a d6 roll
function d6() {
    return Math.floor(Math.random() * 6) + 1;
}
// Function returns result of a d8 roll
function d8() {
    return Math.floor(Math.random() * 8) + 1;
}
// Function returns result of a d10 roll
function d10() {
    return Math.floor(Math.random() * 10) + 1;
}
// Function returns result of a d12 roll
function d12() {
    return Math.floor(Math.random() * 12) + 1;
}
// Function returns result of a 20 roll
function d20() {
    return Math.floor(Math.random() * 20) + 1;
}
// Function returns result of a d100 roll
function d100() {
    return Math.floor(Math.random() * 100) + 1;
}
// Clears out all dice inputs
function clearDice() {
    dice_arr = document.getElementsByClassName("dice");
    for(i = 0; i < dice_arr.length; i++) {
        dice_arr[i].value = 0;
    }
}