
// // Užduotis 3 - EventListeners ir dinamiška DOM manipuliacija

const button = document.getElementById("actionButton");
const initialText = document.getElementById("text");
const parentDiv = document.getElementById("parentDiv")
const newChild = document.createElement('span');
const box = document.getElementById("box");

function onClick() {
    initialText.innerText = "Tekstas pasikeitė!";
    parentDiv.innerHTML = '<span id="newChild">New Child<span>';
    box.style.backgroundColor = 'green';

    if (initialText.innerText === "Tekstas pasikeitė!" && box.style.backgroundColor === "green") {
        const status = document.getElementById("status");
        status.innerText = "Complete";
        status.style.color = "green";
    } else {
        console.log("Operacijos įvykdyti nepavyko.")
    }
}

button.addEventListener('click', onClick);