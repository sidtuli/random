// Array holding all the information for text/picutre and title changes corresponding to the show
var footnotes = [
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:0,
        end:395
    },
    {
        image:"radio/imgs/show6/song1.jpg",
        album:"Midnight Sun",
        artist:"The Ghost of a Saber Tooth Tiger",
        song:"Animals",
        host:"Aditya",
        start:395,
        end:652
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:652,
        end:739
    },
    {
        image:"radio/imgs/show6/joey.png",
        album:"NA",
        artist:"Aditya & Siddy",
        song:"Happy Birthday Joey!",
        host:"Siddy",
        start:739,
        end:762
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:762,
        end:784
    },
    {
        image:"radio/imgs/show6/song2.jpg",
        album:"Mouth Sounds",
        artist:"Neil Cicierega",
        song:"Bills Like Jean Spirit",
        host:"Siddy",
        start:784,
        end:1070
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1070,
        end:1291
    },
    {
        image:"radio/imgs/show6/song3.jpg",
        album:"Synchronicity",
        artist:"The Police",
        song:"King of Pain",
        host:"Aditya",
        start:1291,
        end:1587
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1587,
        end:1746
    },
    {
        image:"radio/imgs/show6/song4.jpg",
        album:"13 Chambers",
        artist:"Wugazi",
        song:"Sleep Rules Everything Around Me",
        host:"Siddy",
        start:1746,
        end:1944
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1944,
        end:2037
    },
    {
        image:"radio/imgs/show6/song5.jpg",
        album:"The Wall",
        artist:"Pink Floyd",
        song:"Waiting for the Worms",
        host:"Aditya",
        start:2037,
        end:2275
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2275,
        end:2384
    },
    {
        image:"radio/imgs/show6/song6intro.png",
        album:"NA",
        artist:"Alex Hawkins",
        song:"Carry on Wayward Slam",
        host:"Siddy",
        start:2384,
        end:2397
    },
    {
        image:"radio/imgs/show6/song6.png",
        album:"NA",
        artist:"Alex Hawkins",
        song:"Carry on Wayward Slam",
        host:"Siddy",
        start:2397,
        end:2644
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2644,
        end:2823
    },
    {
        image:"radio/imgs/show6/song7.jpg",
        album:"Third",
        artist:"Portishead",
        song:"The Rip",
        host:"Aditya",
        start:2823,
        end:3088
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3088,
        end:3259
    },
    {
        image:"radio/imgs/show6/song8.jpg",
        album:"NA",
        artist:"ToonLink",
        song:"Wii Shop Bling",
        host:"Siddy",
        start:3259,
        end:3494
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3494,
        end:3558
    },
    {
        image:"radio/imgs/show6/song9.jpg",
        album:"Rook",
        artist:"Shearwater",
        song:"The Snow Leopord",
        host:"Siddy",
        start:3558,
        end:3848
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3848,
        end:3885
    },
    {
        image:"radio/imgs/show6/song10.png",
        album:"NA",
        artist:"Daft Labeouf",
        song:"Harder, Better, Faster, Do It",
        host:"Robbie",
        start:3885,
        end:3994
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3994,
        end:4020
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
            titleString += "\""+info.song+"\"" + " by "+info.artist + " - Show #6";
            
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
                    document.getElementById("tab").innerHTML = "Show #6";
                }
            });
        }
    });
    // Then we "play" the popcorn element after iterating through the array
    pop.play();
});