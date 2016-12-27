// Array holding all the information for text/picutre and title changes corresponding to the show
var footnotes = [
    {
        image:"radio/imgs/show5/ear.jpg",
        album:"\"Technical Problems\"",
        artist:"Siddy",
        song:"Extreme Feedback",
        host:"Siddy",
        start:0,
        end:3
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3,
        end:83
    },
    {
        image:"radio/imgs/show8/song1.jpg",
        album:"Collage",
        artist:"The Chainsmokers ft. Halsey",
        song:"Closer",
        host:"Sidhanth",
        start:83,
        end:327
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:327,
        end:426
    },
    {
        image:"radio/imgs/show8/song2.jpg",
        album:"Blackstar",
        artist:"David Bowie",
        song:"Blackstar",
        host:"Siddy",
        start:426,
        end:1023
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1023,
        end:1133
    },
    {
        image:"radio/imgs/show8/song3.jpg",
        album:"Fly Like An Eagle",
        artist:"Steve Miller Band",
        song:"Rock'n Me",
        host:"Sidhanth",
        start:1133,
        end:1318
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1318,
        end:1418
    },
    {
        image:"radio/imgs/show8/song4.jpg",
        album:"Weezer (2016)",
        artist:"Weezer",
        song:"California Kids",
        host:"Siddy",
        start:1418,
        end:1444
    },
    {
        image:"radio/imgs/show8/song4_1.jpg",
        album:"Weezer (2016)",
        artist:"Weezer",
        song:"California Kids",
        host:"Siddy",
        start:1444,
        end:1502
    },
    {
        image:"radio/imgs/show8/song4.jpg",
        album:"Weezer (2016)",
        artist:"Weezer",
        song:"California Kids",
        host:"Siddy",
        start:1502,
        end:1624
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1624,
        end:1761
    },
    {
        image:"radio/imgs/show8/song5.jpg",
        album:"NA",
        artist:"The Beatles",
        song:"Hey Jude",
        host:"Sidhanth",
        start:1761,
        end:2137
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2137,
        end:2338
    },
    {
        image:"radio/imgs/show8/song6.jpg",
        album:"A Moon Shaped Pool",
        artist:"Radiohead",
        song:"Burn The Witch",
        host:"Siddy",
        start:2338,
        end:2562
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2562,
        end:2663
    },
    {
        image:"radio/imgs/show8/song7.jpg",
        album:"Repeater",
        artist:"Fugazi",
        song:"Reprovisional",
        host:"Siddy",
        start:2663,
        end:2799
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2799,
        end:2845
    },
    {
        image:"radio/imgs/show8/song8.jpg",
        album:"Plastic Surgery Disasters",
        artist:"Dead Kennedys",
        song:"Moon Over Marin",
        host:"Siddy",
        start:2845,
        end:3067
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3067,
        end:3135
    },
    {
        image:"radio/imgs/show8/song9.jpg",
        album:"This Is Happening",
        artist:"LCD Soundsystem",
        song:"All I Want",
        host:"Siddy",
        start:3135,
        end:3532
    },
]


jQuery(document).ready(function () {
    // Create a popcorn object tied to the audio file
    var pop = Popcorn("#show");
                
    $.each(footnotes,function(i, info) {
        
        // Format the actual footnote contents: and image possibly with music info
        htmlString = "";
        htmlString += "<img src='"+info.image+"'>";
        htmlString += (info.song == "NA") ? "" : "\""+info.song+"\"";
        htmlString += (info.artist == "NA") ? "" : " by "+info.artist;
        htmlString += (info.album == "NA") ? "" : " from <i>"+info.album+"</i>";
        htmlString += (info.host == "NA") ? "" : "<br/> Song chosen by " + info.host;
        // Create an "actual footnote" with popcorn.js
        pop.footnote({
            start: info.start,
            end: info.end,
            text:htmlString,
            target:"text"
        });
        // Change title if a certain song is playing
        if (info.song != "NA" && info.artist != "NA") {
            titleString= "";
            titleString += "\""+info.song+"\"" + " by "+info.artist + " - Show #8";
            
            pop.code({
                start:info.start,
                end:info.end,
                // This bind was inserted to bind the given titleString value to this functin call
                // For some reason it would only keep the last made title string so I had to bind the value to this loop iteration
                // Reference: http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
                // This problem seems absent for the above htmlString. 
                // Not sure why, could be dfference between executing footnotes ("text") and code("functions").
                onStart: function(tabString) {
                    document.getElementById("tab").innerHTML = tabString;
                }.bind(this,titleString),
                onEnd: function() {
                    document.getElementById("tab").innerHTML = "Show #8";
                }
            });
        }
    });
    // Then we "play" the popcorn element after iterating through the array
    pop.play();
});