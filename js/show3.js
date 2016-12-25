// Array holding all the information for text/picutre and title changes corresponding to the show
var footnotes = [
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:0,
        end:78
    },
    {
        image:"radio/imgs/show3/song1.jpg",
        album:"The Musical Million",
        artist:"HF Juleene",
        song:"Clickety-Click",
        host:"Siddy",
        start:78,
        end:141
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:141,
        end:284
    },
    {
        image:"radio/imgs/show3/song2.jpg",
        album:"Give Up",
        artist:"The Postal Service",
        song:"We Will Become Silhouettes",
        host:"Steven",
        start:284,
        end:581
    },
    {
        image:"radio/imgs/show3/spotify.png",
        album:"'Technical Problems'",
        artist:"Steven",
        song:"Spotify",
        host:"Steven",
        start:581,
        end:583
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:583,
        end:722
    },
    {
        image:"radio/imgs/show3/song3.jpg",
        album:"Plantasia",
        artist:"Mort Garson",
        song:"Swingin' Spathipyllums",
        host:"Siddy",
        start:722,
        end:899
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:899,
        end:1065
    },
    {
        image:"radio/imgs/show3/song4.jpg",
        album:"Maybe I'm Dreaming",
        artist:"Owl City",
        song:"Early Birdie",
        host:"Steven",
        start:1065,
        end:1315
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1315,
        end:1522
    },
    {
        image:"radio/imgs/show3/song5.jpg",
        album:"The Fascinating World of Electronic Music By Kid Baltan and Tom Dissevelt",
        artist:"Kid Baltan and Tom Dissevelt",
        song:"?????????",
        host:"Siddy",
        start:1522,
        end:1704
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1704,
        end:1896
    },
    {
        image:"radio/imgs/show3/song6.jpg",
        album:"Discovery",
        artist:"Daft Punk",
        song:"Harder, Better, Faster, Stronger",
        host:"Steven",
        start:1896,
        end:2121
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2121,
        end:2301
    },
    {
        image:"radio/imgs/show3/song7.jpg",
        album:"NA",
        artist:"Kraftwerk",
        song:"The Robots",
        host:"Siddy",
        start:2301,
        end:2522
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2522,
        end:2689
    },
    {
        image:"radio/imgs/show3/song8.png",
        album:"Sparks",
        artist:"Imogen Heap",
        song:"Me the Machine",
        host:"Siddy",
        start:2689,
        end:2950
    },
    {
        image:"radio/imgs/show3/spotify.png",
        album:"'Technical Problems'",
        artist:"Steven",
        song:"Spotify",
        host:"Steven",
        start:2950,
        end:2952
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2952,
        end:3121
    },
    {
        image:"radio/imgs/show3/song9.jpg",
        album:"The Amazing New Electronic Pop Sound Of Jean Jacques Perrey",
        artist:"Jean Jacques Perrey",
        song:"Mary France",
        host:"Siddy",
        start:3121,
        end:3286
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3286,
        end:3370
    },
    {
        image:"radio/imgs/show3/song10.jpg",
        album:"The Bones of What You Believe",
        artist:"CHVRCHES",
        song:"The Mother We Share",
        host:"Steven",
        start:3370,
        end:3560
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3560,
        end:3672
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
            titleString += "\""+info.song+"\"" + " by "+info.artist + " - Show #3";
            
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
                    document.getElementById("tab").innerHTML = "Show #3";
                }
            });
        }
    });
    // Then we "play" the popcorn element after iterating through the array
    pop.play();
});