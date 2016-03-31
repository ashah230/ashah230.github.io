var images= ["images/pic1.jpg", 
"images/pic2.jpg", 
"images/pic3.jpg",
"images/pic4.jpg", 
"images/pic5.jpg", 
"images/pic6.jpg", 
"images/pic7.jpg", 
"images/pic8.jpg"];

var currentImage = images[0];

$(".mybutton").click(function() {
    var image = images[Math.floor(Math.random()*images.length)];
    while (image == currentImage) image = images[Math.floor(Math.random()*images.length)];
    $("#myImage").attr("src", image);
	$("#myImage").attr("class", "photo");
	$("#myImage").attr("alt", "image");
    currentImage = image;
});