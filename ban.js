var red_alert_arr=new Array;
var red_alert=0;
function reset_alert(){
  red_alert=0;
}
function validate_text(){
  lastMess = input.value;
  reset_alert();
  var text = document.getElementById('name').value;
  for(var i=0; i<bannable.length; i++){
    for(var j=0; j<(text.length); j++){
      if(bannable[i]==text.substring(j,(j+bannable[i].length)).toLowerCase()){
        red_alert_arr[red_alert]=text.substring(j,(j+bannable[i].length));
        red_alert++;
      }
    }
  }
  if(red_alert>0){
        disable = true;
        cloudyimg.style.backgroundImage = "url('gallery/Angry.png')";
        document.getElementById('name').disabled = true;
        setTimeout(bl, 10000);
        say("Możliwość interakcji ze mną została zablokowana, masz chwilę żeby ochłonąć :)");
        clsinput();
  }
  else{
    cloudy();
  }
}
window.onload=reset_alert;

var bannable = new Array('badword');


