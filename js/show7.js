// Array holding all the information for text/picutre and title changes corresponding to the show
var footnotes = [
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:0,
        end:114
    },
    {
        image:"radio/imgs/show7/song1.png",
        album:"Q: Are We Not Men? A: We Are Devo!",
        artist:"Devo",
        song:"Praying Hands",
        host:"Siddy",
        start:114,
        end:281
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:281,
        end:437
    },
    {
        image:"radio/imgs/show7/song2.jpg",
        album:"A Place In The Sun",
        artist:"Lit",
        song:"My Own Worst Enemy",
        host:"Alex",
        start:437,
        end:605
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:605,
        end:743
    },
    {
        image:"radio/imgs/show7/song3.jpg",
        album:"Walking On A Dream",
        artist:"Empire of the Sun",
        song:"Delta Bay",
        host:"Siddy",
        start:743,
        end:933
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:933,
        end:1100
    },
    {
        image:"radio/imgs/show7/song4.jpg",
        album:"Recipe For Hate",
        artist:"Bad Religion",
        song:"American Jesus",
        host:"Alex",
        start:1100,
        end:1293
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1293,
        end:1407
    },
    {
        image:"radio/imgs/show7/song5.jpg",
        album:"Doolittle",
        artist:"Pixies",
        song:"Silver",
        host:"Siddy",
        start:1407,
        end:1552
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1552,
        end:1671
    },
    {
        image:"radio/imgs/show7/song6.jpg",
        album:"	The Greatest Songs Ever Written By Us",
        artist:"NOFX",
        song:"The Idiots Are Taking Over",
        host:"Alex",
        start:1671,
        end:1872
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1872,
        end:2043
    },
    {
        image:"radio/imgs/show7/song7.jpg",
        album:"The Great Escape",
        artist:"Blur",
        song:"Charmless Man",
        host:"Siddy",
        start:2043,
        end:2254
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2254,
        end:2444
    },
    {
        image:"radio/imgs/show7/song8.png",
        album:"Appeal to Reason",
        artist:"Rise Against",
        song:"Collapse (Post Amerika)",
        host:"Alex",
        start:2444,
        end:2638
    },
    {
        image:"radio/imgs/show3/spotify.png",
        album:"'Technical Problems'",
        artist:"Alex",
        song:"Spotify",
        host:"Alex",
        start:2638,
        end:2641
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2641,
        end:2773
    },
    {
        image:"radio/imgs/show7/song9.jpg",
        album:"Foo Fighters",
        artist:"Foo Fighters",
        song:"Big Me",
        host:"Siddy",
        start:2773,
        end:2904
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2904,
        end:3118
    },
    {
        image:"radio/imgs/show7/song10.jpg",
        album:"Does This Look Infected?",
        artist:"Sum 41",
        song:"Still Waiting",
        host:"Alex",
        start:3118,
        end:3277
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3277,
        end:3373
    },
    {
        image:"radio/imgs/show7/song11.jpg",
        album:"Red Hot Chili Peppers",
        artist:"Red Hot Chili Peppers",
        song:"True Men Don't Kill Coyotes",
        host:"Siddy",
        start:3373,
        end:3594
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
            titleString += "\""+info.song+"\"" + " by "+info.artist + " - Show #7";
            
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
                    document.getElementById("tab").innerHTML = "Show #7";
                }
            });
        }
    });
    // Then we "play" the popcorn element after iterating through the array
    pop.play();
});