const clockPlaceholder = document.querySelector('.clock');
setInterval( () => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(), 1000);

function PDF() {
  myWin= open("menu/menuNEW.pdf");
}

window.onload = function soundClick() {
  var audio = new Audio(); 
  audio.src = "sound/08422.mp3"; 
  audio.autoplay = true; 
}



