// Countries javascript object for quick lookup of countries by code
var countries = {
    "AF":"Afghanistan","AL":"Albania","DZ":"Algeria","AD":"Andorra","AO":"Angola",
	"AG":"Antigua And Barbuda","AR":"Argentina","AM":"Armenia","AU":"Australia",
    "AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh",
	"BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BT":"Bhutan",
	"BO":"Bolivia","BA":"Bosnia And Herzegovina","BW":"Botswana","BR":"Brazil",
    "BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi",
    "KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","CF":"Central African Republic",
	"TD":"Chad","CL":"Chile","CN":"China","CO":"Colombia","KM":"Comoros","CG":"Congo",
    "CD":"Congo, Democratic Republic","CR":"Costa Rica","CI":"Cote D\"Ivoire","HR":"Croatia",
	"CU":"Cuba","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti",
	"DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador",
	"GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FJ":"Fiji",
	"FI":"Finland","FR":"France","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany",
	"GH":"Ghana","GR":"Greece","GD":"Grenada","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau",
	"GY":"Guyana","HT":"Haiti","VA":"Holy See (Vatican City State)","HN":"Honduras",
	"HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Republic Of",
	"IQ":"Iraq","IE":"Ireland","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan",
	"JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea","KW":"Kuwait",
	"KG":"Kyrgyzstan","LA":"Lao People\"s Democratic Republic","LV":"Latvia","LB":"Lebanon",
	"LS":"Lesotho","LR":"Liberia","LY":"Libyan Arab Jamahiriya","LI":"Liechtenstein",
    "LT":"Lithuania","LU":"Luxembourg","MK":"Macedonia","MG":"Madagascar","MW":"Malawi",
	"MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands",
	"MR":"Mauritania","MU":"Mauritius","MX":"Mexico","FM":"Micronesia, Federated States Of",
	"MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MA":"Morocco",
	"MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands",
	"NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","KP":"North Korea",
	"NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PA":"Panama","PG":"Papua New Guinea",
	"PY":"Paraguay","PE":"Peru","PH":"Philippines","PL":"Poland","PT":"Portugal","QA":"Qatar",	
	"RO":"Romania","RU":"Russian Federation","RW":"Rwanda","KN":"Saint Kitts And Nevis",
    "LC":"Saint Lucia","VC":"Saint Vincent And Grenadines","WS":"Samoa","SM":"San Marino",
    "ST":"Sao Tome And Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia",
	"SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia",
	"SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","KR":"South Korea",
	"ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SZ":"Swaziland",
    "SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan",
	"TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo",
	"TO":"Tonga","TT":"Trinidad And Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan",
	"TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom",
	"US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela",
	"VN":"Viet Nam","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"
}
// Array of country codes to randomly generate other responses to each question
var codes = [
    "AF","AL","DZ","AD","AO","AG","AR","AM","AU","AT","AZ","BS","BH","BD","BB","BY",
	"BE","BZ","BJ","BT","BO","BA","BW","BR","BN","BG","BF","BI","KH","CM","CA","CV",
	"CF","TD","CL","CN","CO","KM","CG","CD","CR","CI","HR","CU","CY","CZ","DK","DJ",
	"DM","DO","EC","EG","SV","GQ","ER","EE","ET","FJ","FI","FR","GA","GM","GE","DE",
	"GH","GR","GD","GT","GN","GW","GY","HT","VA","HN","HU","IS","IN","ID","IR","IQ",
	"IE","IL","IT","JM","JP","JO","KZ","KE","KI","KR","KW","KG","LA","LV","LB","LS",
	"LR","LY","LI","LT","LU","MK","MG","MW","MY","MV","ML","MT","MH","MR","MU","MX",
	"FM","MD","MC","MN","ME","MA","MZ","MM","NA","NR","NP","NL","NZ","NI","NE","NG",
	"KP","NO","OM","PK","PW","PA","PG","PY","PE","PH","PL","PT","QA","RO","RU","RW",
	"KN","LC","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB","SO",
	"ZA","KR","ES","LK","SD","SR","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG",
	"TO","TT","TN","TR","TM","TV","UG","UA","AE","GB","US","UY","UZ","VU","VE","VN",
	"EH","YE","ZM","ZW"
]
// Variable to later save down json data for all countries
var jsondata;
// Variable to save current correct code
var correctCode;
// Function to take out a random value from array
Array.prototype.randsplice = function(){
    var ri = Math.floor(Math.random() * this.length);
    var rs = this.splice(ri, 1);
    return rs;
}
// Function to get random value from array
Array.prototype.randval = function(){
    var ri = Math.floor(Math.random() * this.length);
    var val = this[ri];
    return val;
}
// Function to load in the json with all country data
function getInfoJSON(){
    // Based the request from this post:
    // http://stackoverflow.com/questions/14388452/how-do-i-load-a-json-object-from-a-file-with-ajax
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                jsondata = data;
                nextCountry()
            }
        }
    };
    httpRequest.open('GET',"data/flagsinfo.json");
    httpRequest.send()
}
// Generates the next country
function nextCountry() {
    if(jsondata.length < 1) {
        document.getElementById("current_country").src="";
        document.getElementById("countries").innerHTML = "Done!";
        return;
    }
    var next = jsondata.randsplice();
    currcode = next[0].code;
    document.getElementById("countries").innerHTML = next[0].name;
    o_count = 0;
    o_countries =[];
    correctCode = currcode;
    while(o_count < 3) {
        curr_rand = codes.randval();
        if(curr_rand != currcode && !(curr_rand in o_countries)) {
            o_countries.push(curr_rand);
            o_count += 1;
        }
    }
    document.getElementById("countries").innerHTML += ", "+
         countries[o_countries[0]]+", "+countries[o_countries[1]]+", "+countries[o_countries[2]];
    document.getElementById("current_country").src = "imgs/flags/"+currcode.toLowerCase()+".png";
    o_countries.push(currcode);
    //console.log(o_countries)
    document.getElementById("countries").innerHTML = "";
    options_counter = o_countries.length;
    while(options_counter > 0) {
        curr_option = o_countries.randsplice();
        var curr_button = document.createElement("button");
        curr_button.innerHTML = (countries[curr_option[0]]);
        curr_button.setAttribute("onclick","handleCountryClick(\""+String(curr_option[0])+"\")");
        document.getElementById("countries").appendChild(curr_button);
        options_counter -= 1;
    }
}

function handleCountryClick(code) {
    if(code == correctCode) {
        console.log("correct");
        nextCountry()
    } else {
        console.log("incorrect")
    }
}
getInfoJSON()

