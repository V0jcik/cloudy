document.getElementById('name')
.addEventListener('keyup', function(event) {
  if (event.code === 'Enter')
  {
    event.preventDefault();
    // validate_text();
    validate_text();
  }
});

let myDiv = document.getElementById("chat");
const input = document.getElementById('name');
const comprompt = "!"; //utworzenie znaku wywołującego komendy
let disable = "no";

function bl(){
  disable = "no";
  document.getElementById('name').disabled = false;
  say("<b>Cloudy: </b>Jeśli przemyślałeś/aś swoje zachowanie, to witam z powrotem :D");
}

function clsinput(){
  input.value = "";
  myDiv.scrollTop = myDiv.scrollHeight; //scroll w dół
}

function say(botmessage){
  const para = document.createElement('p');
  const space = document.createElement('div');
  let node = document.createElement('span');
      //Jeśli przekazana zmienna to cyfra, dodaje frazę "Wynik działania to"
    if(!isNaN(botmessage)){
    node.innerHTML = ('<b>Cloudy: </b>Wynik działania to: '+botmessage);
    para.appendChild(node);
    }
    // else if(botmessage == 'bday'){
    //   dateinp = document.createElement('div');
    //   dateinp.innerHTML = '<input type = "date" id="bday" onblur="calculateDays()">';
    //   node = document.createTextNode("Wprowadz datę swoich urodzin:");
    //   para.appendChild(node);
    //   para.appendChild(dateinp)
    // }
    else{
    node.innerHTML = (botmessage);
    para.appendChild(node);
    }
      const element = document.getElementById('row');
      element.appendChild(para);
      element.appendChild(space);
        para.classList.add('botmess');
        space.classList.add('col-md-5');
        clsinput();
}

function cloudy(){
    let message = input.value;
    if(message !== ""){

      const para = document.createElement("p");
      const space = document.createElement('div');
      let node = document.createElement('span');
      node.innerHTML = ('<b>Ty: </b>'+message);
      para.appendChild(node);
      const element = document.getElementById('row');
      element.appendChild(space);
      space.classList.add('col-md-5');
      element.appendChild(para);
      clsinput();
      
      if(message.charAt(0) == comprompt){ //Jeśli wiadomość zaczyna się znakiem zachęty
        var MessageArr = message.match(/\S+/gi);
        message = message.replace(comprompt, ""); //usunięcie znaku zachęty ze stringa
        MessageArr[0] = MessageArr[0].replace(comprompt,""); //usunięcie znaku zachęty ze stringa

        if(message == 'hi'){
          say("<b>Cloudy: </b>Witam Cię człowieku, jestem Cloudy. \nWięcej o mnie -> !cloudy");
        }
        else if(message == 'cloudy'){
          say("<b>Cloudy: </b>Jestem Cloudy, powstałem 26.07.2021. Moim stwórcą jest Vojcik. Na razie nie umiem zbyt wiele, ale z czasem uczę się nowych rzeczy. Listę moich poleceń sprawdzisz wpisując !clist");
        }
        else if(message == 'clist'){
          say("<b>Cloudy: </b>Dostępne komendy: \n!hi | !cloudy | !clear | !calc | !dzis | !iledoswiat");
        }
        else if(MessageArr[0] == 'idz'){
          if(MessageArr[1] == 'rick'){
              clsinput();
              var popup = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "popup", "fullscreen");
              if (popup.outerWidth < screen.availWidth || popup.outerHeight < screen.availHeight){
                popup.moveTo(0,0);
                popup.resizeTo(screen.availWidth, screen.availHeight);
              }
          }
          else if(MessageArr[1] == 'mateusz'){
            input.value = "";
            var popup = window.open("https://www.youtube.com/watch?v=NSD_TfnWttI", "popup", "fullscreen");
            if (popup.outerWidth < screen.availWidth || popup.outerHeight < screen.availHeight){
              popup.moveTo(0,0);
              popup.resizeTo(screen.availWidth, screen.availHeight);
            }
        }
          else{
            window.open(MessageArr[1], '_blank').focus();
            clsinput();
          }
        }
        else if(message == 'clear'){
          document.getElementById('row').innerHTML = '<p></p>';
          document.getElementById('clbutton').click();
          clsinput();
        }
        else if(MessageArr[0] == 'calc'){
          say("<b>Cloudy: </b>Potrafię liczyć! \n !dodaj [a] [b] \n !odejmij [a] [b] \n !podziel [a] [b] \n !pomnoz [a] [b] \n !poteguj [a] [b] \n <span style='font-size:11px;'>*bez nawiasów kwardatowych</span>");
        }
        else if(MessageArr[0] == 'dodaj'){
          const wynik = (Number(MessageArr[1])+Number(MessageArr[2]));
          say(wynik);
        }
        else if(MessageArr[0] == 'odejmij'){
          const wynik = (Number(MessageArr[1])-Number(MessageArr[2]));
          say(wynik);
        }
        else if(MessageArr[0] == 'podziel'){
          const wynik = (Number(MessageArr[1])/Number(MessageArr[2]));
          say(wynik);
        }
        else if(MessageArr[0] == 'pomnoz'){
          const wynik = (Number(MessageArr[1])*Number(MessageArr[2]));
          say(wynik);
        }
        else if(MessageArr[0] == 'poteguj'){
          const wynik = Math.pow(Number(MessageArr[1]),Number(MessageArr[2]));
          say(wynik);
        }


        // DODAĆ:
        // !iledowakacji
        // !iledoswiat
        // !newyear
        // !urodziny(vojbota)


        else if(MessageArr[0] == 'dzis'){
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = date+' godzina: '+time;
          say("<b>Cloudy: </b>Dziś jest: "+dateTime);
        }
        else if(MessageArr[0] == 'iledoswiat'){
          let today = new Date();
          let christmasYear = today.getFullYear();
          if (today.getMonth() == 11 &&
              today.getDate() > 25){
            christmasYear = christmasYear + 1;
          }
          let christmasDate = new Date(christmasYear, 11, 25);
  
          let dayMilliseconds = 1000 * 60 * 60 * 24;
          let remainingDays = Math.ceil((christmasDate.getTime() - today.getTime()) / (dayMilliseconds));
          say("<b>Cloudy: </b>Zostało " + remainingDays + " dni do swiąt.");
        }
        else if(message == 'marta'){
          say("<b>Vojcik: </b>Dzięki niej Cloudy dostał twarz, jestem wdzięczny za pomoc.");
        }
        // else if(MessageArr[0] == 'iledowakacji'){
        //   let today = new Date();
        //   let christmasYear = today.getFullYear();
        //   if (today.getMonth() == 6 &&
        //       today.getDate() > 1){
        //     christmasYear = christmasYear + 1;
        //   }
        //   let christmasDate = new Date(christmasYear, 6, 1);
  
        //   let dayMilliseconds = 1000 * 60 * 60 * 24;
        //   let remainingDays = Math.ceil((christmasDate.getTime() - today.getTime()) / (dayMilliseconds));
        //   say("Zostało " + remainingDays + " dni do wakacji.");
        // }
        // else if(MessageArr[0] == 'urodziny'){
          
        // }
        else{
          clsinput();
        }
        // else if(message == '!vojbot'){
        //         const para = document.createElement('p');
        //         const node = document.createTextNode("Hello I'm VojBot. Checkout my commands  !help");
        //         para.appendChild(node);
        //         const element = document.getElementById("chat");
        //         element.appendChild(para);
        //         document.getElementById('name').value = " ";
        //         para.classList.add('botmess');
        // }
      }
      else{
        clsinput();
      }
    }
}


