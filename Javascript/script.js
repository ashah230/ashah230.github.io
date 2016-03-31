

function myFunction() {
    console.log("Hello World");

}

myFunction();

function addNums(num1, num2) {//arguments only apply inside the braces
    var sum = num1 + num2;
   return sum;
}

/*
addNums(4,5);
9
sum= 9
*/

var person ={
    name: "Brendan",
    age: 33,
    location: "Brooklyn" 
};

/* Person.age[1, 2, 3, 4, 5]
person.age[2]
>3
*/
var numClicks =0;


$("h1").html("This is my homepage");

$("h1").click( function(){
    //do stuff
    $("body").css("background-color", "blue");
    $("h1").css("color", "white");
    numClicks++;
    
    /*if (numClicks <2){ var phrase= "You clicked it" +numClicks + "times.";
    }
    else{
    var phrase="You clicked it" +numClicks + "times."; }*/
    if (numClicks <2){ times="time";
    }
    else{
    times="time"; }
    
    
    $("h1").css("numClicks");
});


$("box").mousemove (function(){
    console.log("moving.....");
    $("box").css ("background-color", "green");
})





/*<div class= "dot"></div>

.dot{
background-color:red;
}
*/

for (var i = 0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
};

$(".dot").each(function(){
    var newTop=Math.floor(Math.random()*500+);
    var newLeft=Math.floor(Math.random()*500);
    console.log(newTop,newLeft);
    $(this).css('top',newTop);
     $(this).css('left',newLeft);
})



/*--Javascript
============================
String:

"Hello Worlld"
>"Hello Worlld"
'This string uses single quotes'
>"This string uses single quotes"
"Hello World \"This is a quote\" and..."
>"Hello World "This is a quote" and..." 

============================
Number:

100 ___the computer knows what the number 100 means
>100
"not 100"
>"not 100

============================

Boolean:

true
>true___the computer knows what the value of true is

============================

Array: set of information (ie. list)

put a comma between each item
each element in an array has a key

["Hello world", false, 3.14]
>["Hello world", false, 3.14]

if i wanted to access 3.14: ["Hello world", false, 3.14] [2]
>3.14

if you want the length of your array you do 

["Hello world", false, 3.14].length
>3

============================

Variable: 

always starts with var

var blackjack = 21
>undefined
blackjack
>21

you can change the value later on... blackjack=18

you can have an array in your variable

blackjack=[21,18]
>[21, 18]
blackjack.length
>2
blackjack [0]
>21

============================
Console Log:
 
You can log any variable or data type and it will spit it back to you. 

console.log("hello world");
hello world

============================

Relational operators: 

4<10
>true
4<3
>false

10==11___use double == because singl = declares a variable
false

"hello world"== "hello world"
true

var name= "AYUSHI"
undefined
var school= "PRATT"
undefined
school=="PRATT"
true
name== "AYUSHI"
true
name =="AYUSHI" && school=="PRATT"__ and
true
name == "AYUSHI" || school=="PRATT"__or
true

============================

If and then Statements:

if (name=="AYUSHI" && school=="PRATT") { console.log ("YOU MADE IT.."); }
>VM7228:2 YOU MADE IT..

Else Statement:

school="SVA"
>"SVA"
if (name=="AYUSHI" && school=="PRATT") { console.log ("YOU MADE IT.."); } else {console.log ("Sorry, you suck..."); }
>VM7649:2 Sorry, you suck...

============================

Basic Math:

var counter = 0
>undefined
counter= counter +1
>1
counter
>1
counter = counter + 1
>2
counter = counter + 1
>3
counter++
>3
counter++
>4
counter++
>5
counter++
>6

counter- - (minus minus)
>7
counter- -
>6
counter- -
>5
counter- -
>4

============================

FOR LOOP: 
for( var multiplier =1; multiplier <= 10; multiplier++) { var result= multiplier * 6; console.log(result);}
>VM10407:2 6
VM10407:2 12
VM10407:2 18
VM10407:2 24
VM10407:2 30
VM10407:2 36
VM10407:2 42
VM10407:2 48
VM10407:2 54
VM10407:2 60

__Students: 

["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles", "Shannon Su", "Sophie Telgheder"]
for (var counter = 0; counter <=8; counter++) { console.log(students[counter]);

var students= ["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles", "Shannon Su", "Sophie Telgheder"]
undefined

for (var counter = 0; counter <=8; counter++) { console.log(students[counter]); }

>VM12392:2 Ah Young Cho
VM12392:2 Krysta Hartono
VM12392:2 Alexander McKenzie
VM12392:2 Kayla Schroter
VM12392:2 Spencer Seligman
VM12392:2 Ayushi Shah
VM12392:2 Michelle Stiles
VM12392:2 Shannon Su
VM12392:2 Sophie Telgheder
undefined

var students= ["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles"]
undefined

for (var counter = 0; counter <students.length; counter++)  { console.log(students[counter]); }
>VM12480:2 Ah Young Cho
VM12480:2 Krysta Hartono
VM12480:2 Alexander McKenzie
VM12480:2 Kayla Schroter
VM12480:2 Spencer Seligman
VM12480:2 Ayushi Shah
VM12480:2 Michelle Stiles
undefined

================================================================================================================

jQuery

$("h1").html("Hello World");
 changes it ot Hello World
 
$("h1").append("Hello World");
adds Hello World

$("h1").prepend("Hello World");
adds Hello World to the beggining

$(".sidebar-sticky").remove();

$(".sidebar-sticky").hide

 $("body").css("background-color", "blue");

================================================================================================================

Random Number:

Math.random ();
>0.866300226887688

Math.random () * 100;
>21.12697185948491

Math.round(3.8);
>4

Math.floor(3.49999);
>3

Math.ceil(3.499999);
>4

Math.floor(Math.random() *100);
4

var students= ["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles", "Shannon Su", "Sophie Telgheder"]
undefined

students [Math.floor (Math.random()*9];

var students= ["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles", "Shannon Su", "Sophie Telgheder"]
undefined

$("h1").html(students[Math.floor(Math.random()*students.length)]);

================================================================================================================

Randomize Cat pictures:
put all cat pictures in folder
img src with class="mycat"

var=cats
var cats = ["cat1.jpeg"]

$("h1").html(students[Math.floor(Math.random()*students.length)]);

$("mycat").attr("src",cats[Math.floor(Math.random()*cats.length)]);

$("body").append('<img src="cats/cat1.jpg"width=400 class="mycat">');

$("body").append('<img src="'+cats[Math.floor(Math.random()*cats.length)]+'"cats/cat1.jpg"width=400 class="mycat">');

================================================================================================================

Dot randomizing 

/*<div class= "dot"></div>

.dot{
background-color:red;
}


for (var i = 0; i < 100; i++) {
    $("body").append("<div class='box'></div>");
};

$(".dot").each(function(){
    var newTop=Math.floor(Math.random()*500+);
    var newLeft=Math.floor(Math.random()*500);
    console.log(newTop,newLeft);
    $(this).css('top',newTop);
     $(this).css('left',newLeft);
})


$(window).resize(function(){
spreadDots();
})

spreadDots;

====================
/*for (var i = 0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
};*/

var images= ["images/pic1.jpeg", 
"images/pic2.jpeg", 
"images/pic3.jpeg",
"images/pic4.jpeg",
"images/pic5.jpeg",
"images/pic6.jpeg",
"images/pic7.jpeg",
"images/pic8.jpeg",
]

/*function myPhoto{ 
    var randomimg = Math.floor(Math.random()*(photography.length));
    document.getElementById("photo").innerHTML = photography[randomimg];
}
   */
   
// var currentimg = false;


$(".mybutton").click(function() {
    

    // var randomimg = images[Math.floor(Math.random()*images.length)];
    
    // while (randomimg == currentimg) {
    //     randomimg = images[Math.floor(Math.random()*images.length)];
    // }
    
    // currentimg = randomimg;
    
    // $(".stage").html("<img src='images/" + randomimg + "'>");
    
    alert("5");
});
