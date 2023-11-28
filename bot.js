let lastMess = "";
// obsługa kliknięcia przycisku ENTER
document.getElementById('name').addEventListener('keyup', function(event){
  if (event.code === 'Enter'){
    event.preventDefault();
    // walidacja wiadomości w poszukiwaniu zabronionych słów
    validate_text();
  }
  else if (event.code === 'ArrowUp'){
    event.preventDefault();
      // ostatnia wprowadzona komenda / wiadomość po kliknięciu strzałki w górę
      input.value = lastMess;
    }
  else if (event.code === 'ArrowDown'){
    event.preventDefault();
      // wyczyszczenie inputu po kliknięciu strzałki w dół
      input.value = "";
    }
});
// obsługa automatycznego wprowadzania komend do inputu po kliknięciu ich na wysłanej przez Cloudiego liście.
var commands = document.getElementsByName('command');
for (var i = 0; i < commands.length; i++) {
  commands[i].addEventListener('click', function(){document.getElementById('input').focus()});
}

// czyszczenie inputu po każdym kliknięciu ENTER -> scroll na dół okna czatu
function clsinput(){
  input.value = "";
  myDiv.scrollTop = myDiv.scrollHeight; //scroll w dół
}

// utworzenie nowego (niewidocznego) dymka do którego zostanie wprowadzona odpowiedź Cloudiego
function clear(){
  document.getElementById('row').innerHTML = '<p></p>'
}

// randomowy delay by zasymulować chwilę zastanowienia u Cloudiego
function randomdelay(){
    min = 200;
    max = 500;
    time = Math.floor(Math.random() * (max - min) + min);
  return new Promise(resolve => setTimeout(resolve, time));
}

// wyświetlanie odpowiedzi Cloudiego
async function say(botmessage){ 
  const para = document.createElement('p');
  const space = document.createElement('div');
  let node = document.createElement('span');
  
  await randomdelay(); // randomowy czas oczekiwania na odpowiedź

    // jeśli przekazana zmienna to cyfra, dodaje frazę "Wynik działania to"
    if(!isNaN(botmessage)){
    node.innerHTML = ('<b>Cloudy: </b>Wynik działania to: '+botmessage);
    }
    // jeśli przekazana zmienna nie jest cyfrą, Cloudy odpowiada
    else{
    node.innerHTML = ('<b>Cloudy: </b>'+botmessage);
    }
    
    //utworzenie nowego dymka z wiadomością Cloudiego
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
    // zamiana miesiąca w formie liczbowej na nazwy miesięcy oraz ilości ich dni
    switchMonth = myBirthday[1];
    switch(switchMonth) {
      case 0: smonth = 'none'; break;
      case 1: smonth = 'Styczeń', maxDaysInMonth = '31'; break;
      case 2: smonth = 'Luty'; // obsługa przestępnych lat
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

    // jeśli ilość dni podanego miesiąca wykracza poza określoną wyżej ilość
    if(myBirthday[0] > maxDaysInMonth){
      say(smonth + ' ma tylko ' + maxDaysInMonth + ' dni. Wprowadź poprawną datę.')
    }
    // jeśli podane wartości są samymi zerami lub liczbami ujemnymi 
    else if(myBirthday[0] < 0 || myBirthday[1] < 0 || myBirthday[2] < 0 || smonth == 'none'){
      say("Podałeś błędną datę")
    }
    else{
      // jeśli została użyta komenda !bday cloudy
      if(myBirthday == 'cloudy'){
        myBirthday = new Array(26, 7, 2021);
        cloudyDate = true;
      }
          bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]); // tworzenie daty następnych urodzin

          if( today.getTime() > bday.getTime()) { // jeśli urodziny aktualnego roku już były, przejdź do następnego roku
            bday.setFullYear(bday.getFullYear()+1);
            rok = 1;
          }
          
          diff = bday.getTime()-today.getTime(); // różnica pomiędzy dziś a datą następnych urodzin
          days = Math.floor(diff/(1000*60*60*24)+1); // ilość dni
          
          if(myBirthday.length == 2){ // jeśli wprowadzona data miała format DD.MM
            say("Jeszcze <b>"+ days +"</b> dni do twoich urodzin!");
          }
          else if(cloudyDate == true){
            cage = Number(today.getFullYear() - myBirthday[2] + rok);
            say("Moje <b>"+ cage +"</b> urodziny będą za: <b>"+ days +"</b> dni.");
          }
          else{
              age = Number(today.getFullYear() - myBirthday[2] + rok); // które to będą urodziny z kolei
              let urodziny = new Date(myBirthday[2],(myBirthday[1]-1),myBirthday[0]);
              if(today < urodziny){
                say("Jeszcze się nie urodziłeś cwaniaczku"); // Jeśli data z przyszłości
              }
              else{ // jeśli wprowadzona data miała format DD.MM.RRRR
                say("Jeszcze <b>"+ days +"</b> dni do twoich <b>"+ age +"</b> urodzin!");
              }
          }
    }
  }
}

function opegg(url){ // otwarcie linku na fullscreenie
  clsinput()
  var popup = window.open(url, "popup", "fullscreen");
  if (popup.outerWidth < screen.availWidth || popup.outerHeight < screen.availHeight){
    popup.moveTo(0,0);
    popup.resizeTo(screen.availWidth, screen.availHeight);
  }
}

// blokada wysyłania wiadomości [starsza wersja filtra]

// function bl(){ 
//   disable = false;
//   cloudyimg.style.backgroundImage = "url('gallery/Cloudy.png')";
//   document.getElementById('name').disabled = false;
//   say("Jeśli przemyślałeś/aś swoje zachowanie, to witam z powrotem :D");
// }
// let disable = false;
// let cloudyimg = document.getElementById('cloudyimg');

let myDiv = document.getElementById("chat"); // czat 
const input = document.getElementById('name'); // pole wprowadzania
const comprompt = "!"; // znak zachęty

function cloudy(){
    let message = input.value; // pobranie inputu
    if(message !== ""){
      // utworzenie dymka czatu z wprowadzoną wiadomością / komendą
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
      
      if(message.charAt(0) == comprompt){ // jeśli wiadomość zaczyna się znakiem zachęty
        var MessageArr = message.match(/\S+/gi); // podział komendy na polecenie i zmienne jeśli są wymagane
        message = message.replace(comprompt, ""); // usunięcie znaku zachęty ze stringa
        MessageArr[0] = MessageArr[0].replace(comprompt,""); // usunięcie znaku zachęty ze stringa
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
            (MessageArr[1] == 'rick' ? opegg("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "popup", "fullscreen") : window.open(MessageArr[1], '_blank').focus(), clsinput());
            break;
          case "clear":
            clear()
            clsinput();
            break;
            // calculator
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
            // dates
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
            // komenda birthday
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
                // walidacja poprawności wpisanej daty
                if(bdayLen > 10){
                  say(`Podałeś złą datę, sprawdź jej poprawność:\n<span style='font-size:11px;'><b>Przyjmowane formaty daty:</b>\nDD.MM.RRRR\nDD-MM-RRRR\nDD MM RRRR\n*rok nie jest wymagany</span>`);
                }
                else if(birthdayDate.includes('.') || birthdayDate.includes('-') || birthdayDate.includes(' ')){
                  for(var i=0; i<str.length;i++){
                      if (str[i] === '.' || str[i] === '-' || str[i] === ' ') indices.push(i); // znalezienie znaków w dacie
                  }
                  birthdayDate = birthdayDate.replaceAll('.','').replaceAll('-','').replaceAll(' ','');
                  if(bdayLen < 6){
                    myBirthday = [Number(birthdayDate.substr(0,indices[0])), Number(birthdayDate.substr(indices[0],2))]; // dzień / miesiąc
                      birhtday(myBirthday);
                  }
                  else if((indices[1] == 3 && birthdayDate.length > 6) || ((indices[0] == 2 || indices [0] == 1) && indices[1] == 4 && birthdayDate.length > 7)){
                    say(`Podałeś złą datę, sprawdź jej poprawność:\n<span style='font-size:11px;'><b>Przyjmowane formaty daty:</b>\nDD.MM.RRRR\nDD-MM-RRRR\nDD MM RRRR\n*rok nie jest wymagany</span>`);
                  }
                  else{
                    let num = 2;
                    if(indices[1] == 3 || (indices[0] == 2 && indices[1] == 4)){num = (num - 1)};
                    myBirthday = [Number(birthdayDate.substr(0,indices[0])), Number(birthdayDate.substr(indices[0],num)), Number(birthdayDate.substr(indices[1]-1,4))]; // dzień / miesiąc / rok
                      birhtday(myBirthday);
                  }
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
