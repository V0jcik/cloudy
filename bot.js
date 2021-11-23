var myDiv = document.getElementById("chat");
const input = document.getElementById('name');

document.getElementById('name')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();


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
                  say("Dostępne komendy: !hi | !vojbot");
                }
                else if(message == '!clear'){
                  document.getElementById('row').innerHTML = '<p></p>';
                  say("Czat został wyczyszczony");
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
                        let node = document.createTextNode(botmessage);
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
    });

