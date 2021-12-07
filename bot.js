document.getElementById('name')
.addEventListener('keyup', function(event) {
  if (event.code === 'Enter')
  {
    event.preventDefault();
    // validate_text();
    validate_text();
  }
});

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
    }
    else if(botmessage == "thanks"){
      node.innerHTML = ('<b>Vojcik: </b>Marta, dzięki niej Cloudy otrzymał twarz. Jestem bardzo wdzięczny za pomoc.');
    }
    else{
    node.innerHTML = ('<b>Cloudy: </b>'+botmessage);
    }
    para.appendChild(node);
      const element = document.getElementById('row');
      element.appendChild(para);
      element.appendChild(space);
        para.classList.add('botmess');
        space.classList.add('col-md-5');
        clsinput();
}

function birhtday(myBirthday){
  let today, bday, diff, days, age, rok = 0, cage, cdate;
  today = new Date();
    if(myBirthday == 'cloudy'){
      myBirthday = new Array(26, 7, 2021);
      cdate = true;
    }
    
  bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);

  if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
    rok = 1;
  }
  
  diff = bday.getTime()-today.getTime();
  days = Math.floor(diff/(1000*60*60*24)+1);

  if(myBirthday.length == 2){
    say("Jeszcze <b>"+ days +"</b> dni do twoich urodzin!");
  }
  else if(cdate == true){
    cage = Number(today.getFullYear() - myBirthday[2] + rok);
    say("Moje <b>"+ cage +"</b> urodziny będą za: <b>"+ days +"</b> dni.");
  }
  else{
      age = Number(today.getFullYear() - myBirthday[2] + rok);
      let urodziny = new Date(myBirthday[2],(myBirthday[1]-1),myBirthday[0]);
      if(today < urodziny){
        say("Jeszcze się nie urodziłeś cwaniaczku"); // Jeśli data z przyszłości
      }
      else{
        say("Jeszcze <b>"+ days +"</b> dni do twoich <b>"+ age +"</b> urodzin!");
      }
  }
}

function opegg(url){
  var popup = window.open(url, "popup", "fullscreen");
  if (popup.outerWidth < screen.availWidth || popup.outerHeight < screen.availHeight){
    popup.moveTo(0,0);
    popup.resizeTo(screen.availWidth, screen.availHeight);
  }
}

function bl(){
  disable = false;
  cloudyimg.style.backgroundImage = "url('gallery/Cloudy.png')";
  document.getElementById('name').disabled = false;
  say("Jeśli przemyślałeś/aś swoje zachowanie, to witam z powrotem :D");
}

let myDiv = document.getElementById("chat");
const input = document.getElementById('name');
const comprompt = "!"; //utworzenie znaku wywołującego komendy
let disable = false;

let cloudyimg = document.getElementById('cloudyimg');
  cloudyimg.style.backgroundImage = "url('gallery/Angry.png')";
  cloudyimg.style.backgroundImage = "url('gallery/Cloudy.png')";



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
          say("Witam Cię człowieku, jestem Cloudy. \nWięcej o mnie -> !cloudy");
        }

        else if(message == 'cloudy'){
          say("Jestem Cloudy, powstałem 26.07.2021. Moim stwórcą jest Vojcik. Na razie nie umiem zbyt wiele, ale z czasem uczę się nowych rzeczy. Listę moich poleceń sprawdzisz wpisując !clist");
        }

        else if(message == 'clist'){
          say("Dostępne komendy: \n!hi | !cloudy | !clear | !calc | !dzis | !iledoswiat");
        }

        else if(MessageArr[0] == 'idz'){
          if(MessageArr[1] == 'rick'){
            clsinput();
            opegg("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "popup", "fullscreen");
          }
          else if(MessageArr[1] == 'mateusz'){
            clsinput();
            opegg("https://www.youtube.com/watch?v=NSD_TfnWttI", "popup", "fullscreen");
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
          say("Potrafię liczyć! \n !dodaj [a] [b] \n !odejmij [a] [b] \n !podziel [a] [b] \n !pomnoz [a] [b] \n !poteguj [a] [b] \n <span style='font-size:11px;'>*bez nawiasów kwardatowych</span>");
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

        else if(MessageArr[0] == 'dzis'){
          var today = new Date();
          var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = date+' godzina: '+time;
          say("Dziś jest: "+dateTime);
        }

        else if(MessageArr[0] == 'swieta'){
          let today = new Date();
          if (today.getMonth() == 11 && today.getDate() > 25){
            today.setFullYear(today.getFullYear() + 1);
          }
          let christmasDate = new Date(today.getFullYear(), 11, 25);
          diff = christmasDate.getTime()-today.getTime();
          days = Math.floor(diff/(1000*60*60*24)+1);
            say("Zostało " + days + " dni do swiąt.");
        }

        else if(message == 'marta'){
          say("thanks");
        }

        else if(MessageArr[0] == 'bday'){
          if(MessageArr[1] == 'cloudy'){
            birhtday('cloudy');
          }
          else{
            let myBirthday = new Array;
              if(MessageArr.length == 2 && (MessageArr[1].includes('.') || MessageArr[1].includes('-'))){
                if(MessageArr[1].length == 5){
                    myBirthday = [MessageArr[1].substr(0,2), MessageArr[1].substr(3,2)]; // dzień / miesiąc
                    birhtday(myBirthday);
                }
                else{
                    myBirthday = [MessageArr[1].substr(0,2), MessageArr[1].substr(3,2), MessageArr[1].substr(6,4)]; // dzień / miesiąc / rok
                    birhtday(myBirthday);
                }
              }
              else{
                  if(MessageArr.length == 4){
                    myBirthday = [MessageArr[1], MessageArr[2], MessageArr[3]]; // dzień / miesiąc / rok
                    birhtday(myBirthday);
                  }
                  else{
                    myBirthday = [MessageArr[1], MessageArr[2]]; // dzień / miesiąc
                    birhtday(myBirthday);
                  }
              }
          }
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


