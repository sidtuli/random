    var sectionNum = 0;

    function addSec() {
        sectionNum += 1;
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


        new_section = document.createElement("div")
        new_section.setAttribute("id","section_"+sectionNum)
        htmlString = "<span id=\"roll_"+sectionNum+"\"></span>"
        new_btn = document.createElement("button")
        new_btn.setAttribute("id","btn_"+sectionNum)
        btn_id = "btn_"+sectionNum
        new_btn.textContent = "roll"
        new_title = document.createElement("h4")
        new_title.innerHTML = document.getElementById("roll_title").value;
        new_section.appendChild(new_title);
        new_section.innerHTML = new_section.innerHTML + htmlString;
        new_section.appendChild(new_btn)
        document.getElementById("sections").appendChild(new_section)
        var currSec = sectionNum;
        document.getElementById(btn_id).setAttribute("onclick","roll("+currSec.toString()+",dice_result)")
    }
    function roll(secnum,dice) {
        dice = dice.split(",")
        //dice = JSON.parse(dice)
        console.log(secnum)
        htmlString = "<span style='color:#9400D3'>"
        d4count = dice[0]
        d6count = dice[1]
        d8count = dice[2]
        d10count = dice[3]
        d12count = dice[4]
        d20count = dice[5]
        d100count = dice[6]
        sum = 0
        while(d4count > 0) {
            curr = d4()
            sum += curr
            htmlString += curr.toString() + ","
            d4count -= 1
        }
        htmlString += "</span><span style='color:blue'>"
        while(d6count > 0) {
            curr = d6()
            sum += curr
            htmlString += curr.toString() + ","
            d6count -= 1
        }
        htmlString += "</span><span style='color:green'>"
        while(d8count > 0) {
            curr = d8()
            sum += curr
            htmlString += curr.toString() + ","
            d8count -= 1
        }
        htmlString += "</span><span style='color:#FADA5E'>"
        while(d10count > 0) {
            curr = d10()
            sum += curr
            htmlString += curr.toString() + ","
            d10count -= 1
        }
        htmlString += "</span><span style='color:orange'>"
        while(d12count > 0) {
            curr = d12()
            sum += curr
            htmlString += curr.toString() + ","
            d12count -= 1
        }
        htmlString += "</span><span style='color:red'>"
        while(d20count > 0) {
            curr = d20()
            sum += curr
            htmlString += curr.toString() +","
            d20count -= 1
        }
        htmlString += "</span><span style='color:silver'>"
        while(d100count > 0) {
            curr = d100()
            sum += curr
            htmlString += curr.toString() + ","
            d100count -= 1
        }
        htmlString += "</span>Sum = " + sum.toString()

        document.getElementById("roll_"+secnum.toString()).innerHTML = htmlString
    }
    function d4() {
        return Math.floor(Math.random() * 4) + 1;
    }
    function d6() {
        return Math.floor(Math.random() * 6) + 1;
    }
    function d8() {
        return Math.floor(Math.random() * 8) + 1;
    }
    function d10() {
        return Math.floor(Math.random() * 10) + 1;
    }
    function d12() {
        return Math.floor(Math.random() * 12) + 1;
    }
    function d20() {
        return Math.floor(Math.random() * 20) + 1;
    }
    function d100() {
        return Math.floor(Math.random() * 100) + 1;
    }