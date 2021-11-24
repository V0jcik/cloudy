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
    

    if(message.charAt(0) == '!'){
      var MessageArr = message.match(/\S+/gi);


      if(message == '!hi'){
        say("No witam Cie człowieku");
      }
      else if(message == '!vojbot'){
        say("Jestem VojBot, powstałem 26.07.2021. Moim stwórcą jest Vojcik. Na razie mało potrafię, ale z czasem nauczę się czegoś nowego. Listę moich komend sprawdzisz wpisując !vblist");
      }
      // DOROBIĆ OKIENKO POPUP Z LISTĄ KOMEND
      // if(message == '!vblist'){
      //   say("No witam Cie człowieku");
      //   document.getElementById('name').value = "";
      //   myDiv.scrollTop = myDiv.scrollHeight;
      // }
      else if(message == '!vblist'){
        say("Dostępne komendy: !hi | !vojbot | !clear");
      }
      else if(MessageArr[0] == '!idz'){
        if(MessageArr[1] == 'rick'){
            input.value = "";
            var popup = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "popup", "fullscreen");
            if (popup.outerWidth < screen.availWidth || popup.outerHeight < screen.availHeight){
              popup.moveTo(0,0);
              popup.resizeTo(screen.availWidth, screen.availHeight);
            }
        }
        else{
          window.open(MessageArr[1], '_blank').focus();
          input.value = "";
        }
      }
      else if(message == '!clear'){
        document.getElementById('row').innerHTML = '<p></p>';
        document.getElementById('clbutton').click();
        input.value = "";
      }
      else if(MessageArr[0] == '!dodaj'){
        const wynik = (Number(MessageArr[1])+Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == '!odejmij'){
        const wynik = (Number(MessageArr[1])-Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == '!dziel'){
        const wynik = (Number(MessageArr[1])/Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == '!mnoz'){
        const wynik = (Number(MessageArr[1])*Number(MessageArr[2]));
        say(wynik);
      }
      else if(MessageArr[0] == '!poteguj'){
        const wynik = Math.pow(Number(MessageArr[1]),Number(MessageArr[2]));
        say(wynik);
      }
      else{
        input.value = "";
        myDiv.scrollTop = myDiv.scrollHeight;
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
      input.value = "";
      myDiv.scrollTop = myDiv.scrollHeight;
    }
    function say(botmessage){
              const para = document.createElement('p');
              const space = document.createElement('div');
              let node;
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
                input.value = "";
                para.classList.add('botmess');
                space.classList.add('col-md-5');
                myDiv.scrollTop = myDiv.scrollHeight;
    }
  }
}

