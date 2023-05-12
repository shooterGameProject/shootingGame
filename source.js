var cursor = document.getElementsByClassName("cursor");
var bird =   document.getElementsByClassName("birds");
var bird1 =  document.getElementsByClassName("birds1");
var bird2 =  document.getElementsByClassName("birds2");
var bird3 =  document.getElementsByClassName("birds3");
var bird4 =  document.getElementsByClassName("birds4");
var bird5 =  document.getElementsByClassName("birds5");
var bird6 =  document.getElementsByClassName("birds6");
var bird7 =  document.getElementsByClassName("birds7");
var bird8 =  document.getElementsByClassName("birds8");
var bird9 =  document.getElementsByClassName("birds9");
var bird10 = document.getElementsByClassName("birds10");
var bird11 = document.getElementsByClassName("birds11");
var bird12 = document.getElementsByClassName("birds12");
var bird13 = document.getElementsByClassName("birds13");

var button = document.getElementsByClassName("button");
var blood = document.getElementsByClassName("blood");
var body;
var score = 0;
var screenWidth = $(".body").width();
var screenHeight = $(".body").height();
// console.log(screenWidth);
// console.log(screenHeight);


 var gameduration = 60;
 function time() {
   $(".counter").text(gameduration + " seconds remaining");
   gameduration--;
 if (gameduration < 0) {
     clearInterval(timer);
    alert('GAME OVER')
    alert('your score is : '+score)
 }
 }
 var timer = setInterval(time, 1000);
 console.log(score)




window.addEventListener("mousemove", function (e) {
  console.log("target", e.target);
  console.log("bird", bird);

  $(".cursor").css("position", "absolute");
  $(".cursor").css("left", e.clientX + "px");
  $(".cursor").css("top", e.clientY + "px");
  console.log(e.clientX, e.clientY);
});

window.addEventListener("mousemove", function (e) {
  $(".blood").css("position", "absolute");
  $(".blood").css("left", e.clientX + "px");
  $(".blood").css("top", e.clientY + "px");
  console.log(e.clientX, e.clientY);
});


$(".blood").css("display", "none");
window.addEventListener("click", function (e) {
  console.log(e.target);

  if (e.target === bird[0]) {
    $(".blood").css("display", "block");
    setTimeout(function () {
      $(".blood").css("display", "none");
    }, 1000);
    score += 1;
    $(".birds").css("display", "none");
    $(".test").text(score);
  }
});

setInterval(function () {
  Top = Math.random() * screenHeight;
  left = Math.random() * screenWidth;
  $(".birds").css("left", left + "px");
  $(".birds").css("top", Top + "px");
}, 300);



$(".blood").css("display", "none");
window.addEventListener("click", function (e) {
  console.log(e.target);

  if (e.target === bird1[0]) {
    $(".blood").css("display", "block");
    setTimeout(function () {
      $(".blood").css("display", "none");
    }, 1000);
    score += 1;
    $(".birds1").css("display", "none");
    $(".test").text(score);
  }
});

setInterval(function () {
  Top = Math.random() * screenHeight;
  left = Math.random() * screenWidth;
  $(".birds1").css("left", left + "px");
  $(".birds1").css("top", Top + "px");
}, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird2[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
$(".birds2").css("display", "none");

     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds2").css("left", left + "px");
   $(".birds2").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird3[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
$(".birds3").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds3").css("left", left + "px");
   $(".birds3").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird4[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds4").css("display", "none");

     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds4").css("left", left + "px");
   $(".birds4").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird5[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds5").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds5").css("left", left + "px");
   $(".birds5").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird6[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds6").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds6").css("left", left + "px");
   $(".birds6").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird7[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds7").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds7").css("left", left + "px");
   $(".birds7").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird8[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds8").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds8").css("left", left + "px");
   $(".birds8").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird9[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds9").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds9").css("left", left + "px");
   $(".birds9").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird10[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds10").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds10").css("left", left + "px");
   $(".birds10").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird11[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds11").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds11").css("left", left + "px");
   $(".birds11").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird12[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds12").css("display", "none");
     score += 1;

     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds12").css("left", left + "px");
   $(".birds12").css("top", Top + "px");
 }, 300);

 $(".blood").css("display", "none");
 window.addEventListener("click", function (e) {
   console.log(e.target);

   if (e.target === bird13[0]) {
     $(".blood").css("display", "block");
     setTimeout(function () {
       $(".blood").css("display", "none");
     }, 1000);
     $(".birds3").css("display", "none");
     score += 1;
     $(".test").text(score);
   }
 });

 setInterval(function () {
   Top = Math.random() * screenHeight;
   left = Math.random() * screenWidth;
   $(".birds13").css("left", left + "px");
   $(".birds13").css("top", Top + "px");
 }, 300);
 
console.log(score)

 

