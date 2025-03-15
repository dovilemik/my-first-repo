// Uzduotis 1 - Mygtuko paspaudimo įvykis

const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");

function showMessage(event) {
    alert(`Paspaudėte mygtuką su ID: ${event.target.id}`);
}

firstButton.addEventListener('click', showMessage)
secondButton.addEventListener('click', showMessage)