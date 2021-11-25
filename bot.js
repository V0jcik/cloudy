document.getElementById('name')
.addEventListener('keyup', function(event) {
  if (event.code === 'Enter')
  {
    event.preventDefault();
    vojbot();
  }
});

var myDiv = document.getElementById("chat");
const input = document.getElementById('name');
const comprompt = "/"; //utworzenie znaku wywołującego komendy


function clsinput(){
  input.value = "";
  myDiv.scrollTop = myDiv.scrollHeight; //scroll w dół
}

function vojbot(){
  let message = input.value;
  if(message != ""){

    const para = document.createElement("p");
    const space = document.createElement('div');
    const node = document.createTextNode(message);
    para.appendChild(node);
    const element = document.getElementById('row');
    element.appendChild(para);
    element.appendChild(space);
    space.classList.add('col-md-5');

    if(message == ''){

    }
    else if(message.charAt(0) == comprompt){ //Jeśli wiadomość zaczyna się znakiem zachęty
      var MessageArr = message.match(/\S+/gi);
      message = message.replace(comprompt, ""); //usunięcie znaku zachęty ze zmiennej
      MessageArr[0] = MessageArr[0].replace(comprompt,""); //usunięcie znaku zachęty ze zmiennej

      if(message == 'hi'){
        say("No witam Cie człowieku");
      }
      else if(message == 'vojbot'){
        say("Jestem VojBot, powstałem 26.07.2021. Moim stwórcą jest Vojcik. Na razie mało potrafię, ale z czasem nauczę się czegoś nowego. Listę moich komend sprawdzisz wpisując !vblist");
      }
      else if(message == 'vblist'){
        say("Dostępne komendy: /hi | /vojbot | /clear");
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
      else if(MessageArr[0] == 'dodaj'){
        const wynik = (Number(MessageArr[1])+Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == 'odejmij'){
        const wynik = (Number(MessageArr[1])-Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == 'dziel'){
        const wynik = (Number(MessageArr[1])/Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == 'mnoz'){
        const wynik = (Number(MessageArr[1])*Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == 'poteguj'){
        const wynik = Math.pow(Number(MessageArr[1]),Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == 'dzis'){
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' godzina: '+time;
        say("Dziś jest: "+dateTime);
      }
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
    function say(botmessage){
              const para = document.createElement('p');
              const space = document.createElement('div');
              let node;
          //Jeśli przekazana zmienna to cyfra, dodaje frazę "Wynik działania to"
          if(!isNaN(botmessage)){
            node = document.createTextNode('Wynik działania to: '+botmessage);
          }
          else{
            node = document.createTextNode(botmessage);
          }

              para.appendChild(node);
              const element = document.getElementById('row');
              element.appendChild(space);
              element.appendChild(para);
                para.classList.add('botmess');
                space.classList.add('col-md-5');
                clsinput();
    }
  }
}

