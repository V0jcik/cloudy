var darkmode = document.getElementById('darkmode');
var icon = document.getElementById('icon');
darkmode.addEventListener("mouseover", function(event){
  // highlight the mouseover target
  icon.classList.replace('fa-solid','fa-regular');
}, false);
darkmode.addEventListener("mouseout", function(event){
  // highlight the mouseover target
  icon.classList.replace('fa-regular','fa-solid');
}, false);

var dark = true;
var dmodes = document.getElementsByClassName("darkmode");

function chcolor(){
  if(dark == true){
    dmodes.setAttribute('style','background: white !important; color: black;');
    dark = false;
  }
  else{
    dmodes.setAttribute('style','background: black !important; color: white;');
    dark = true;
  }
};