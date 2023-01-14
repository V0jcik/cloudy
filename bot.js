let lastMess = "";
document.getElementById('name').addEventListener('keyup', function(event){
  if (event.code === 'Enter'){
    event.preventDefault();
    // validate_text();
    validate_text();
  }
  else if (event.code === 'ArrowUp'){
    event.preventDefault();
      // up arrow
      input.value = lastMess;
    }
  else if (event.code === 'ArrowDown'){
    event.preventDefault();
      // down arrow
      input.value = "";
    }
});

var commands = document.getElementsByName('command');
for (var i = 0; i < commands.length; i++) {
  commands[i].addEventListener('click', function(){document.getElementById('input').focus()});
}

function clsinput(){
  input.value = "";
  myDiv.scrollTop = myDiv.scrollHeight; //scroll w dół
}
function clear(){
  document.getElementById('row').innerHTML = '<p></p>'
}


function randomdelay(){
    min = 200;
    max = 500;
    time = Math.floor(Math.random() * (max - min) + min);
  return new Promise(resolve => setTimeout(resolve, time));
}

async function say(botmessage){
  const para = document.createElement('p');
  const space = document.createElement('div');
  let node = document.createElement('span');
  
  await randomdelay();

    //Jeśli przekazana zmienna to cyfra, dodaje frazę "Wynik działania to"
    if(!isNaN(botmessage)){
    node.innerHTML = ('<b>Cloudy: </b>Wynik działania to: '+botmessage);
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
  let today, bday, diff, days, age, rok = 0, cage, cloudyDate, switchMonth, maxDaysInMonth;
  today = new Date();
  
  if(myBirthday[1] > 12){
    say("Podałeś niepoprawny miesiąc, rok ma 12 miesięcy");
  }
  else{
    switchMonth = myBirthday[1];
    switch(switchMonth) {
      case 0: smonth = 'none'; break;
      case 1: smonth = 'Styczeń', maxDaysInMonth = '31'; break;
      case 2: smonth = 'Luty';
              if (myBirthday[2] % 4 == 0 && myBirthday[2] % 100 != 0 || myBirthday[2] % 400 == 0){maxDaysInMonth = '29'; break;}
              else{maxDaysInMonth = '28'; break;}
      case 3: smonth = 'Marzec', maxDaysInMonth = '31'; break;
      case 4: smonth = 'Kwiecień', maxDaysInMonth = '30'; break;
      case 5: smonth = 'Maj', maxDaysInMonth = '31'; break;
      case 6: smonth = 'Czerwiec', maxDaysInMonth = '30'; break;
      case 7: smonth = 'Lipiec', maxDaysInMonth = '31'; break;
      case 8: smonth = 'Sierpień', maxDaysInMonth = '31'; break;
      case 9: smonth = 'Wrzesień', maxDaysInMonth = '30'; break;
      case 10: smonth = 'Październik', maxDaysInMonth = '31'; break;
      case 11: smonth = 'Listopad', maxDaysInMonth = '30'; break;
      case 12: smonth = 'Grudzień', maxDaysInMonth = '31'; break;
      default: smonth = '[miesiąc]';
    }
    if(myBirthday[0] > maxDaysInMonth){
      say(smonth + ' ma tylko ' + maxDaysInMonth + ' dni. Wprowadź poprawną datę.')
    }
    else if(myBirthday[0] < 0 || myBirthday[1] < 0 || myBirthday[2] < 0 || smonth == 'none'){
      say("Podałeś błędną datę")
    }
    else{
      if(myBirthday == 'cloudy'){
        myBirthday = new Array(26, 7, 2021);
        cloudyDate = true;
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
          else if(cloudyDate == true){
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
  }
}

function opegg(url){
  clsinput()
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
const comprompt = "!"; // znak zachęty
let disable = false;

let cloudyimg = document.getElementById('cloudyimg');

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
        let wynik = 0;
        switch(MessageArr[0]){
          case "hi":
            say(`Witam Cię człowieku, jestem Cloudy. \nWięcej o mnie <button name='command' class='command' onclick="javascript:(input.value = '!cloudy')(input.focus())">!cloudy</button>`);
            break;
          case "cloudy":
            say(`Jestem Cloudy, powstałem 26.07.2021. Moim stwórcą jest <b>Vojcik</b>. Na razie nie umiem zbyt wiele, ale z czasem uczę się nowych rzeczy. Listę moich poleceń sprawdzisz wpisując <button name='command' class='command' onclick="javascript:(input.value = '!help')(input.focus())">!help</button>`);
            break;
          case "help":
            say(`Dostępne komendy: \n<button name='command' class='command' onclick="javascript:(input.value = '!hi')(input.focus())">!hi</button> | <button name='command' class='command' onclick="javascript:(input.value = '!cloudy')(input.focus())">!cloudy</button> | <button name='command' class='command' onclick="javascript:(input.value = '!clear')(input.focus())">!clear</button> | <button name='command' class='command' onclick="javascript:(input.value = '!calc')(input.focus())">!calc</button> | <button name='command' class='command' onclick="javascript:(input.value = '!dzis')(input.focus())">!dzis</button> | <button name='command' class='command' onclick="javascript:(input.value = '!swieta')(input.focus())">!swieta</button> | <button name='command' class='command' onclick="javascript:(input.value = '!bday')(input.focus())">!bday</button>`);
            break;
          case "go":
            (MessageArr[1] == 'rick' ? opegg("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "popup", "fullscreen") : (MessageArr[1] == 'mateusz' ? opegg("https://www.youtube.com/watch?v=NSD_TfnWttI", "popup", "fullscreen") : window.open(MessageArr[1], '_blank').focus(), clsinput()));
            break;
          case "clear":
            clear()
            clsinput();
            break;
          case "marta":
            say("thanks");
            break;
            // Calculator
          case "calc":
            say(`Potrafię liczyć! \n <button name='command' class='command' onclick="javascript:(input.value = '!dodaj ')(input.focus())">!dodaj</button> [a] [b] \n <button name='command' class='command' onclick="javascript:(input.value = '!odejmij ')(input.focus())">!odejmij</button> [a] [b] \n <button name='command' class='command' onclick="javascript:(input.value = '!podziel ')(input.focus())">!podziel</button> [a] [b] \n <button name='command' class='command' onclick="javascript:(input.value = '!pomnoz ')(input.focus())">!pomnoz</button> [a] [b] \n <button name='command' class='command' onclick="javascript:(input.value = '!poteguj ')(input.focus())">!poteguj</button> [a] [b] \n <span style='font-size:11px;'>*bez nawiasów kwardatowych</span>`);
            break;
          case "dodaj":
            wynik = (Number(MessageArr[1])+Number(MessageArr[2]));
            (isNaN(MessageArr[1]) ? say(`Podaj mi liczbę!`) : (isNaN(MessageArr[2]) ? say(`Podaj mi drugą liczbę!`) : say(wynik)));
            break;
          case "odejmij":
            wynik = (Number(MessageArr[1])-Number(MessageArr[2]));
            (isNaN(MessageArr[1]) ? say(`Podaj mi liczbę!`) : (isNaN(MessageArr[2]) ? say(`Podaj mi drugą liczbę!`) : say(wynik)));
            break;
          case "podziel":
            wynik = (Number(MessageArr[1])/Number(MessageArr[2]));
            (isNaN(MessageArr[1]) ? say(`Podaj mi liczbę!`) : (isNaN(MessageArr[2]) ? say(`Podaj mi drugą liczbę!`) : say(wynik)));
            break;
          case "pomnoz":
            wynik = (Number(MessageArr[1])*Number(MessageArr[2]));
            (isNaN(MessageArr[1]) ? say(`Podaj mi liczbę!`) : (isNaN(MessageArr[2]) ? say(`Podaj mi drugą liczbę!`) : say(wynik)));
            break;
          case "poteguj":
            wynik = Math.pow(Number(MessageArr[1]),Number(MessageArr[2]));
            (isNaN(MessageArr[1]) ? say(`Podaj mi podstawę potęgi!`) : (isNaN(MessageArr[2]) ? say(`Podaj mi wykładnik potęgi!`) : say(wynik)));
            break;
            // Dates
          case "dzis":
            let today = new Date();
            let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' godzina: '+time;
            say("Dziś jest: "+dateTime);
            break;
          case "swieta":
            let stoday = new Date();
            if (stoday.getMonth() == 11 && stoday.getDate() > 25){
              stoday.setFullYear(stoday.getFullYear() + 1);
            }
            let christmasDate = new Date(stoday.getFullYear(), 11, 25);
            diff = christmasDate.getTime()-stoday.getTime();
            days = Math.floor(diff/(1000*60*60*24)+1);
              if(days == 0){
                say("Wesołych Świąt!");
              }
              else{
                say("Zostało " + days + " dni do swiąt.");
              }
            break;
            // Birthday
          case "bday":
            if(MessageArr.length == 1){
              say("Podaj dzień i miesiąc lub pełną datę\n<span style='font-size:11px;'><b>Przyjmowane formaty daty:</b>\nDD.MM.RRRR\nDD-MM-RRRR\nDD MM RRRR\n*rok nie jest wymagany</span>");
              input.focus();
            }
            else{
              var indices = [];
              if(MessageArr[1] == 'cloudy'){
                birhtday('cloudy');
              }
              else{
                let birthdayDate = MessageArr.slice(1).join(' ');
                let bdayLen = birthdayDate.length;
                let myBirthday = new Array;
                let str = birthdayDate;
                if(bdayLen > 10){
                  say(`Podałeś złą datę, sprawdź jej poprawność:\n<span style='font-size:11px;'><b>Przyjmowane formaty daty:</b>\nDD.MM.RRRR\nDD-MM-RRRR\nDD MM RRRR\n*rok nie jest wymagany</span>`);
                }
                else if(birthdayDate.includes('.') || birthdayDate.includes('-') || birthdayDate.includes(' ')){
                  for(var i=0; i<str.length;i++){
                      if (str[i] === '.' || str[i] === '-' || str[i] === ' ') indices.push(i);
                  }
                  birthdayDate = birthdayDate.replaceAll('.','').replaceAll('-','').replaceAll(' ','');
                  if(bdayLen < 6){
                    myBirthday = [Number(birthdayDate.substr(0,indices[0])), Number(birthdayDate.substr(indices[0],2))]; // dzień / miesiąc
                      birhtday(myBirthday);
                      // say('short date: '+myBirthday);
                  }
                  else if((indices[1] == 3 && birthdayDate.length > 6) || ((indices[0] == 2 || indices [0] == 1) && indices[1] == 4 && birthdayDate.length > 7)){
                    say(`Podałeś złą datę, sprawdź jej poprawność:\n<span style='font-size:11px;'><b>Przyjmowane formaty daty:</b>\nDD.MM.RRRR\nDD-MM-RRRR\nDD MM RRRR\n*rok nie jest wymagany</span>`);
                  }
                  else{
                    let num = 2;
                    if(indices[1] == 3 || (indices[0] == 2 && indices[1] == 4)){num = (num - 1)};
                    myBirthday = [Number(birthdayDate.substr(0,indices[0])), Number(birthdayDate.substr(indices[0],num)), Number(birthdayDate.substr(indices[1]-1,4))]; // dzień / miesiąc / rok
                      birhtday(myBirthday);
                      // say('long date: '+myBirthday);
                  }
                      // say('check indices: '+indices);
                }
                else{
                  say(`Podałeś złą datę, sprawdź jej poprawność:\n<span style='font-size:11px;'><b>Przyjmowane formaty daty:</b>\nDD.MM.RRRR\nDD-MM-RRRR\nDD MM RRRR\n*rok nie jest wymagany</span>`);
                }
              }
            }
            break;
          default: clsinput();;
        }
      }
      else{
        clsinput();
      }
    }
}