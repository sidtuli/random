// Array holding all the information for text/picutre and title changes corresponding to the show
var footnotes = [
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:0,
        end:86
    },
    {
        image:"radio/imgs/show5/song1.png",
        album:"NA",
        artist:"CBS",
        song:"Gunsmoke Intro & Close",
        host:"Robbie",
        start:86,
        end:174
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:174,
        end:262
    },
    {
        image:"radio/imgs/show5/song2.png",
        album:"NA",
        artist:"CBS",
        song:"Brady Bunch Intro",
        host:"Robbie",
        start:262,
        end:321
    },
    {
        image:"radio/imgs/show5/ear.jpg",
        album:"\"Technical Problems\"",
        artist:"Siddy",
        song:"Extreme Feedback",
        host:"Siddy",
        start:322,
        end:326
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:326,
        end:420
    },
    {
        image:"radio/imgs/show5/song3.png",
        album:"Splashdown",
        artist:"Breakwater",
        song:"Release The Beast",
        host:"Siddy",
        start:420,
        end:713
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:713,
        end:797
    },
    {
        image:"radio/imgs/show5/song4.png",
        album:"NA",
        artist:"Mike Post and Pete Carpenter",
        song:"The Rockford Files",
        host:"Robbie",
        start:797,
        end:989
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:989,
        end:1103
    },
    {
        image:"radio/imgs/show5/song5.jpg",
        album:"Why Can't We Live Together",
        artist:"Timmy Thomas",
        song:"Why Can't We Live Together",
        host:"Siddy",
        start:1103,
        end:1392
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1392,
        end:1529
    },
    {
        image:"radio/imgs/show5/song6.png",
        album:"NA",
        artist:"Jim Haas",
        song:"Happy Days",
        host:"Robbie",
        start:1529,
        end:1664
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1664,
        end: 1667
    },
    {
        image:"radio/imgs/show5/song7.png",
        album:"NA",
        artist:"The Mash",
        song:"Suicide Is Painless",
        host:"Robbie",
        start:1667,
        end:1718
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1718,
        end:1873
    },
    {
        image:"radio/imgs/show5/song8.jpg",
        album:"Luiz Bonfa Plays Great Songs",
        artist:"Luiz Bonfa",
        song:"Seville",
        host:"Siddy",
        start:1873,
        end:2006
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2006,
        end:2122
    },
    {
        image:"radio/imgs/show5/song9.png",
        album:"NA",
        artist:"Bob James",
        song:"Angela",
        host:"Robbie",
        start:2122,
        end:2219
    },
    {
        image:"radio/imgs/show5/song10.png",
        album:"NA",
        artist:"Shandi Sinnamon",
        song:"Charles in Charge",
        host:"Robbie",
        start:2219,
        end:2284
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2284,
        end:2413
    },
    {
        image:"radio/imgs/show5/song11.jpg",
        album:"NA",
        artist:"Pierre Henry and Michel Colombier",
        song:"Psyche Rock",
        host:"Siddy",
        start:2413,
        end:2573
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2573,
        end:2677
    },
    {
        image:"radio/imgs/show5/song12.png",
        album:"Moonlighting",
        artist:"Al Jarreau",
        song:"Moonlighting",
        host:"Robbie",
        start:2677,
        end:2738
    },
    {
        image:"radio/imgs/show5/song13.png",
        album:"Music From Cheers",
        artist:"Gary Portnoy",
        song:"Where Everybody Knows Your Name",
        host:"Robbie",
        start:2738,
        end:2888
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2888,
        end:3018
    },
    {
        image:"radio/imgs/show5/song14.jpg",
        album:"The Rolling Stones Songbook",
        artist:"Andrew Oldham Orchestra",
        song:"The Last Time",
        host:"Siddy",
        start:3018,
        end:3239
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3239,
        end:3374
    },
    {
        image:"radio/imgs/show5/song15.jpg",
        album:"NA",
        artist:"Nick South & Tom Strahle",
        song:"Herman's Head Intro",
        host:"Robbie",
        start:3374,
        end:3436
    },
    {
        image:"radio/imgs/show5/song16.jpg",
        album:"NA",
        artist:"John Debney",
        song:"The Pretender Intro",
        host:"Robbie",
        start:3436,
        end:3483
    },
    {
        image:"radio/imgs/show5/song17.png",
        album:"NA",
        artist:"Cheap Trick",
        song:"In The Street",
        host:"Robbie",
        start:3483,
        end:3526
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
            titleString += "\""+info.song+"\"" + " by "+info.artist + " - Show #5";
            
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
                    document.getElementById("tab").innerHTML = "Show #5";
                }
            });
        }
    });
    // Then we "play" the popcorn element after iterating through the array
    pop.play();
});