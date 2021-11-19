function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

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
              const element = document.getElementById("chat");
              element.appendChild(para);

              if(message.charAt(0) == '!'){
                if(message == '!hi'){
                  say("Hello I'm VojBot");
                  document.getElementById('name').value = "";
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
              }
              function say(botmessage){
                        const para = document.createElement('p');
                        let node = document.createTextNode(botmessage);
                        para.appendChild(node);
                        const element = document.getElementById("chat");
                        element.appendChild(para);
                        document.getElementById('name').value = "";
                        para.classList.add('botmess');
              }
            }
        }
    });

