var jsondata;

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
                writeToPage(data);
            }
        }
    };
    httpRequest.open('GET',"data/flagsinfo.json");
    httpRequest.send()
}
// Function that initiates writing to the web page
function writeToPage(data) {
    
    for(i = 0; i < jsondata.length; i++) {
        curr = jsondata[i];
        htmlString = "{\"code\":\""+curr.code+"\", \"name\": \""+curr.name+"\"";
        countryInfoRequest(curr.code,htmlString);
    }
    
    
}

function countryInfoRequest(code,string) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4) {
            if(httpRequest.status == 200) {
                var data = JSON.parse(httpRequest.responseText);
                //console.log(data.geonames[0].geonameId);
                neighborsRequest(data.geonames[0].geonameId,string);
            }
        }
    };
    httpRequest.open('GET',"http://api.geonames.org/countryInfoJSON?country="+code+"&username=stuli");
    httpRequest.send();
}

function neighborsRequest(geoId,string) {
     var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4) {
            if(httpRequest.status == 200) {
                console.log(string);
                var data = JSON.parse(httpRequest.responseText);
                neighbors = [];
                console.log(data.geonames);
                string += ", \"neighbors\": [";
                for(i = 0; i < data.geonames.length; i++) {
                    neighbors.push(data.geonames[i].countryCode)
                    string += "\""+ data.geonames[i].countryCode +"\"";
                    if(i < data.geonames.length - 1) {
                        string+= ", ";
                    }
                }
                //console.log(neighbors.toString())
                string += "] }, <br>";
                document.body.innerHTML += string;
            }
        }
    };
    httpRequest.open('GET',"http://api.geonames.org/neighboursJSON?geonameId="+geoId+"&username=stuli");
    httpRequest.send();
}


getInfoJSON()

