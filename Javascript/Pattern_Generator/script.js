var images= ["images/pic1.jpg", 
"images/pic2.jpg", 
"images/pic3.jpg",
"images/pic4.png", 
"images/pic5.png", 
"images/pic6.png", 
"images/pic7.png", 
"images/pic8.png"];

var currentImage = images[0];

$(".mybutton").click(function() {
    var image = images[Math.floor(Math.random()*images.length)];
    while (image == currentImage) image = images[Math.floor(Math.random()*images.length)];
    $("#myImage").attr("src", image);
	$("#myImage").attr("class", "photo");
	$("#myImage").attr("alt", "image");
    currentImage = image;
});