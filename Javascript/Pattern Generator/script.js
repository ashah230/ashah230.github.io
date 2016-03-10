/*for (var i = 0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
};*/

var images= ["images/pic1.jpeg", 
"images/pic2.jpeg", 
"images/pic3.jpeg",
"images/pic4.jpeg",
"images/pic5.jpeg";
"images/pic6.jpeg",
"images/pic7.jpeg",
"images/pic8.jpeg",
]

/*function myPhoto{ 
    var randomimg = Math.floor(Math.random()*(photography.length));
    document.getElementById("photo").innerHTML = photography[randomimg];
}
   */
   
   
    var currentimg = false;


$(".mybutton").click(function() {
    

    var randomimg = images[Math.floor(Math.random()*images.length)];
    
    while (randomimg == currentimg) {
        randomimg = images[Math.floor(Math.random()*images.length)];
    }
    
    currentimg = randomimg;
    
    $(".stage").html("<img src='images/" + randomimg + "'>");
});