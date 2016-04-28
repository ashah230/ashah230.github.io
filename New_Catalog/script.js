var images= ["images/pic1.jpg", 
"images/pic2.jpg", 
"images/pic3.jpg",
"images/pic4.jpg", 
"images/pic5.jpg", 
"images/pic6.jpg"];

/*function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
*/
/*var images= ["images/pic1.jpg", 
"images/pic2.jpg", 
"images/pic3.jpg",
"images/pic4.jpg", 
"images/pic5.jpg", 
"images/pic6.jpg"];


var currentImage = images[0];

$(".mybutton").click(function() {
    var image = images[Math.floor(Math.random()*images.length)];
    while (image == currentImage) image = images[Math.floor(Math.random()*images.length)];
    $("#myImage").attr("src", image);
	$("#myImage").attr("class", "photo");
	$("#myImage").attr("alt", "image");
    currentImage = image;
    
});

 $(".photo").each(function() {
    var randtop = Math.floor(Math.random() * 1000) + "px";
    var randleft = Math.floor(Math.random() * 1000) + "px";
    
   $(this).css("top", randtop);
   $(this).css("left", randleft);
});
*/

