var darkmode = document.getElementById('darkmode');
var icon = document.getElementById('icon');
darkmode.addEventListener("mouseover", function(event){
    //do something
});

darkmode.addEventListener('click', change)

var elems = document.getElementsByClassName("darkmode");
    let oldColor = "rgb(24, 25, 26)";
    let temp = "";
    let newColor = "rgb(255, 253, 250)";

function getValue (elem, property) {
    return window.getComputedStyle(elem, null).getPropertyValue(property);
}

function moonTimeout(){
    darkmode.removeAttribute('disabled','');
}

function change(){
    Array.prototype.forEach.call(elems, function (elem) {
        var backgroundColor = getValue(elem, "background-color"),
            borderColor = getValue(elem, "border-color"),
            color = getValue(elem, "color");
    
        if (backgroundColor == oldColor) {
            elem.style.backgroundColor = newColor;
        }
    
        if (borderColor == oldColor) {
            elem.style.borderColor = newColor;
        }
    
        if (color == newColor) {
            elem.style.color = oldColor;
        }

        //moon
        let currentClass = icon.className;
        if (currentClass.includes('fa-solid')){
            icon.classList.replace('fa-solid','fa-regular');
            darkmode.setAttribute('disabled','');
            setTimeout(moonTimeout, 500);
        }
        else if(currentClass.includes('fa-regular')){
            icon.classList.replace('fa-regular','fa-solid');
            darkmode.setAttribute('disabled','');
            setTimeout(moonTimeout, 500);
        }
    });
    temp = oldColor;
    oldColor = newColor;
    newColor = temp;
}