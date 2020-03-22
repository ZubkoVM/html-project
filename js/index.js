const clockPlaceholder = document.querySelector('.clock');
setInterval( () => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(), 1000);


function PDF() {
  myWin= open("menu/menuNEW.pdf");
}
 



