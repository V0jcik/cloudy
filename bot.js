document.getElementById('name')
.addEventListener('keyup', function(event) {
  if (event.code === 'Enter')
  {
    event.preventDefault();
    // validate_text();
    vojbot();
  }
});

let myDiv = document.getElementById("chat");
const input = document.getElementById('name');
const comprompt = "!"; //utworzenie znaku wywołującego komendy
let disable = "no";

function bl(){
  disable = "no";
  say("Jeśli przemyślałeś, to witam z powrotem :D");
}

function clsinput(){
  input.value = "";
  myDiv.scrollTop = myDiv.scrollHeight; //scroll w dół
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
        //KOD DO WYSZUKIWANIA SŁÓW KLUCZOWYCH Z TALICY W STRINGU (NIE DZIAŁA :)
    // var bannable = new Array("bloody", "war", "terror");

    //   var swear_alert_arr = new Array();
    //   var swear_alert_count = 0;
    //   function reset_alert_count(){
    //     swear_alert_count = 0;
    //   }
    //   function validate_text(){
    //     reset_alert_count();
    //     for (var i = 0; i < bannable.length; i++){
    //       for (var j = 0; j < message.length; j++){
    //         if (bannable[i] == message.substring(j, j + bannable[i].length).toLowerCase()){
    //           swear_alert_arr[swear_alert_count] = message.substring(j, j + bannable[i].length);
    //           swear_alert_count++;
    //         }
    //       }
    //     }
    //     var alert_text = "";
    //     for (var k = 1; k <= swear_alert_count; k++) {
    //       alert_text += "\n" + "(" + k + ")  " + swear_alert_arr[k - 1];
    //     }
    //     if (swear_alert_count > 0){
    //       say("nie" + alert_text);
    //       // say("Wiadomość nie zostanie wysłana!!!\n Zawiera nielegalne słowa takie jak:\n__\n" + alert_text + "\n");
    //     }
    //     else{
    //       vojbot();
    //     }
    //   }
    //   window.onload = reset_alert_count;


function vojbot(){
  if(disable == "no"){
    let message = input.value;
    if(message !== ""){

      const para = document.createElement("p");
      const space = document.createElement('div');
      const node = document.createTextNode(message);
      para.appendChild(node);
      const element = document.getElementById('row');
      element.appendChild(para);
      element.appendChild(space);
      space.classList.add('col-md-5');
      
      if(bannable.includes(message)){
        
        disable = "yes";
        setTimeout(bl, 10000);
        say("Możliwość interakcji ze mną została zablokowana, masz chwilę żeby ochłonąć :)")
        clsinput();
      }
      if(message.charAt(0) == comprompt){ //Jeśli wiadomość zaczyna się znakiem zachęty
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
    }
  }
  else{
    clsinput();
  }
}


const bannable = ['nigger','chuj','chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
'cipie', 'dojebać','dojebac', 'dojebie', 'dojebał', 'dojebal',
'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
'przypierdalający', 'przypierdalajacy', 'przypierdolić',
'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
'zjebała', 'zjebala', 'zjebana','zjebany', 'zjebią', 'zjebali', 'zjeby'];