const clockPlaceholder = document.querySelector('.clock');
setInterval( () => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(), 1000);

function PDF() {
  myWin= open("menu/menuNEW.pdf");
}

jQuery(document).ready(function() {
 $('.txt').textillate({});
 });

 
window.onload = function soundClick() {
  var audio = new Audio(); 
  audio.src = "sound/08422.mp3"; 
  audio.autoplay = true; 
}

$(function () { $('.textillate').textillate({ in: { effect:'bounceInLeft'} }); }) 

$(function () { $('.textillateflash').textillate({ in: { effect:'flash'} }); })

//$(document).ready(function() {
   // $('.textillateflash').animated('flash', 'fadeOut');
//}

//$(document).ready(function() {
  // $(".textillateflash").animated("zoomInUP", "zoomOutDown");
  // $(".count_element").on("click", (function() {
      // ga("send", "event", "goal", "goal");
       //yaConterXXXXXXXX.reachGoal("goal");
      // return true;
  // }));
//}