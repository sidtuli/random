// Array holding all the information for text/picutre and title changes corresponding to the show
var footnotes = [
    {
        image:"radio/imgs/show2/song1.jpg",
        album:"End Hits",
        artist:"Fugazi",
        song:"Caustic Acrostic",
        host:"Siddy",
        start:0,
        end:118
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:118,
        end:345
    },
    {
        image:"radio/imgs/show2/song2.jpg",
        album:"Alvvayss",
        artist:"Alvvays",
        song:"Next of Kin",
        host:"Jay",
        start:345,
        end:570
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:570,
        end:752
    },
    {
        image:"radio/imgs/show2/song3.jpg",
        album:"Young Americans",
        artist:"David Bowie",
        song:"Young Americans",
        host:"Siddy",
        start:752,
        end:754
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:754,
        end:758
    },
    {
        image:"radio/imgs/show2/song3.jpg",
        album:"Young Americans",
        artist:"David Bowie",
        song:"Young Americans",
        host:"Siddy",
        start:758,
        end:1067
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1067,
        end:1197
    },
    {
        image:"radio/imgs/show2/song4.jpg",
        album:"Common Dreads",
        artist:"Enter Shikari",
        song:"The Jester",
        host:"Jay",
        start:1197,
        end:1436
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1436,
        end:1588
    },
    {
        image:"radio/imgs/show2/song5.jpg",
        album:"Evil Friends",
        artist:"Portugal. The Man",
        song:"Modern Jesus",
        host:"Siddy",
        start:1588,
        end:1778
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1778,
        end:2040
    },
    {
        image:"radio/imgs/show2/song6.jpg",
        album:"NA",
        artist:"Black Rhinoceros",
        song:"Alcohol and Taco Bell",
        host:"Jay",
        start:2040,
        end:2240
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2240,
        end:2436
    },
    {
        image:"radio/imgs/show2/song7.jpg",
        album:"Sticky Fingers",
        artist:"Rolling Stones",
        song:"Wild Horses",
        host:"Siddy",
        start:2436,
        end:2777
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2777,
        end:2943
    },
    {
        image:"radio/imgs/show2/song8.jpg",
        album:"Six Feet Beneath The Moon",
        artist:"King Krool",
        song:"Borderlines",
        host:"Jay",
        start:2943,
        end:3129
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3129,
        end:3282
    },
    {
        image:"radio/imgs/show2/song9.jpg",
        album:"The Information",
        artist:"Beck",
        song:"New Round",
        host:"Siddy",
        start:3282,
        end:3486
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3486,
        end:3626
    },
    {
        image:"radio/imgs/show2/song10.jpg",
        album:"My Love Is Cool",
        artist:"Wolf Alice",
        song:"You're A Germ",
        host:"Jay",
        start:3626,
        end:3750
    }
    
    
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
            titleString += "\""+info.song+"\"" + " by "+info.artist + " - Show #2";
            
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
                    document.getElementById("tab").innerHTML = "Show #2";
                }
            });
        }
    });
    // Then we "play" the popcorn element after iterating through the array
    pop.play();
});