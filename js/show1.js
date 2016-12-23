
var footnotes = [
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:0,
        end:123
    },
    {
        image:"radio/imgs/show1/song1.jpg",
        album:"Crucible: The Songs of Hunters & Collectors",
        artist:"The Avalanches",
        song:"Stalking to A Stranger",
        host:"Siddy",
        start:123,
        end:561
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:561,
        end:787
    },
    {
        image:"radio/imgs/show1/song2.jpg",
        album:"Like I Said",
        artist:"Ani DiFranco",
        song:"The Whole Night",
        host:"Jonah",
        start:787,
        end:923
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:923,
        end:1103
    },
    {
        image:"radio/imgs/show1/song3.jpg",
        album:"Man on the Moon II: The Legend of Mr. Rager",
        artist:"Kid Cudi",
        song:"Mr.Rager",
        host:"Siddy",
        start:1103,
        end:1395
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1395,
        end:1604
    },
    {
        image:"radio/imgs/show1/song4.jpg",
        album:"Who Are We Living For?",
        artist:"Dispatch",
        song:"Even(Headman)",
        host:"Jonah",
        start:1604,
        end:1884
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:1884,
        end:2062
    },
    {
        image:"radio/imgs/show1/song5.png",
        album:"Can't Buy A Thrill",
        artist:"Steely Dan",
        song:"Midnite Cruiser",
        host:"Siddy",
        start:2062,
        end:2300
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2300,
        end:2472
    },
    {
        image:"radio/imgs/show1/song6.jpg",
        album:"It's A Wonderful Life",
        artist:"Sparklehorse",
        song:"Piano Fire",
        host:"Jonah",
        start:2472,
        end:2631
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:2631,
        end:2829
    },
    {
        image:"radio/imgs/show1/song7.jpg",
        album:"Uptown Saturday Night",
        artist:"Camp Lo",
        song:"Luchini AKA This Is It",
        host:"Siddy",
        start:2829,
        end:3049
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3049,
        end:3170
    },
    {
        image:"radio/imgs/show1/song8.jpg",
        album:"Honeymoon",
        artist:"Lana Del Ray",
        song:"Art Deco",
        host:"Jonah",
        start:3170,
        end:3465
    },
    {
        image:"radio/imgs/filler.png",
        album:"NA",
        artist:"NA",
        song:"NA",
        host:"NA",
        start:3465,
        end:3600
    }
]


jQuery(document).ready(function () {
    var pop = Popcorn("#show");
                
    Array.forEach(footnotes,function(info){
        // Format the acual footnote contents: and image possibly with music info
        htmlString = "";
        htmlString += "<img src='"+info.image+"'>";
        htmlString += (info.song == "NA") ? "" : "\""+info.song+"\"";
        htmlString += (info.artist == "NA") ? "" : " by "+info.artist;
        htmlString += (info.album == "NA") ? "" : " from <i>"+info.album+"</i>";
        htmlString += (info.host == "NA") ? "" : "<br/> Song chosen by " + info.host;
        pop.footnote({
            start: info.start,
            end: info.end,
            text:htmlString,
            target:"text"
        });
        if (info.song != "NA" && info.artist != "NA") {
            pop.code({
                start:info.start,
                end:info.end,
                onStart: function() {
                    document.getElementById("tab").innerHTML = "\""+info.song+"\"" + " by "+info.artist + " - Show #1";
                },
                onEnd: function() {
                    document.getElementById("tab").innerHTML = "Show #1";
                }
            });
        }
    });

    pop.play();
});