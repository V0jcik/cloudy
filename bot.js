var myDiv = document.getElementById("chat");
    

document.getElementById('name')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            let message = document.getElementById('name').value;
            
            if(message != ""){

              const para = document.createElement("p");
              const node = document.createTextNode(message);
              para.appendChild(node);
              const element = document.getElementById('chat');
              element.appendChild(para);

              if(message.charAt(0) == '!'){
                if(message == '!hi'){
                  say("No witam Cie człowieku");
                  document.getElementById('name').value = "";
                  myDiv.scrollTop = myDiv.scrollHeight;
                }
                else if(message == '!vojbot'){
                  say("Jestem VojBot, powstałem 26.07.2021. Moim stwórcą jest Vojcik. Na razie mało potrafię, ale z czasem nauczę się czegoś nowego. Listę moich komend sprawdzisz wpisując !vblist");
                  document.getElementById('name').value = "";
                  myDiv.scrollTop = myDiv.scrollHeight;
                }
                // DOROBIĆ OKIENKO POPUP Z LISTĄ KOMEND
                // if(message == '!vblist'){
                //   say("No witam Cie człowieku");
                //   document.getElementById('name').value = "";
                //   myDiv.scrollTop = myDiv.scrollHeight;
                // }
                else if(message == '!vblist'){
                  say("Dostępne komendy: !hi | !vojbot");
                  document.getElementById('name').value = "";
                  myDiv.scrollTop = myDiv.scrollHeight;
                }
                else{
                  document.getElementById('name').value = "";
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
                document.getElementById('name').value = "";
                myDiv.scrollTop = myDiv.scrollHeight;
              }
              function say(botmessage){
                        const para = document.createElement('p');
                        let node = document.createTextNode(botmessage);
                        para.appendChild(node);
                        const element = document.getElementById('chat');
                        element.appendChild(para);
                        document.getElementById('name').value = "";
                        para.classList.add('botmess');
              }
            }
        }
    });

