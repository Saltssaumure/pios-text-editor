/* eslint-env browser */

function help() {
    var helpful = document.getElementById("helpful");
    var button = document.getElementById("help");
    if (helpful.style.display === "block") {
        helpful.style.display = "none";
        button.innerHTML = "?";
    }
    else {
        helpful.style.display = "block";
        button.innerHTML = "x";
    }
}

function removebox() {
    this.parentNode.remove();
}

//let boxcount = 0;
function addbox(user, side) {
    // Copy box with id "user"
    var container = document.getElementById("container"),
        box = document.getElementById(user);
    var boxcopy = box.cloneNode(true);
    boxcopy.classList.add(side); // state which side of the screen it appears on
    boxcopy.removeAttribute("id");
    container.appendChild(boxcopy);

    
    var remover = document.createElement("div");
    remover.className = "remove";
    remover.innerHTML = "x";
    remover.onclick = removebox;

    boxcopy.appendChild(remover);
    
}

// from https://stackoverflow.com/questions/27177661/save-html-locally-with-javascript
function save() {
    var htmlContent = "<!doctype html>\n" + document.documentElement.outerHTML;
    
    var blob = new Blob([htmlContent], {type: "text/html"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "piOSTextEditorOutput.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    alert("Downloaded HTML with your text.\nSave CSS manually to view in piOS style. Auto-download for CSS to be added later!");
}

