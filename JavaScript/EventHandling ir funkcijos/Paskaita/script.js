
const manoMygtukas = document.getElementById('mano-mygtukas');

let count = 0;
const countDisplay = document.getElementById("count-display");
countDisplay.innerText = 0;
console.log(countDisplay);

function skaiciuoti() {
    count++;
        //atvaizduoti esama reiksme hmtl puslapyje
    countDisplay.innerText = count;
    if(count === 10) {
        manoMygtukas.removeEventListener('click', skaiciuoti)
    }
}

manoMygtukas.addEventListener('click', skaiciuoti);

// Pasidaryti nauja mygtuka HTML
// Padaryti analogini funkcionaluma kaip skaiciuoti, tik atimti
// atvaizduoti prideta arba atimta skaiciu - du mygtukai turi buti,
// viena paspaudus prideti sk. kita paspaudus - atimti sk

const pridetiMygtukas = document.getElementById("mygtukas-prideti");
const atimtiMygtukas = document.getElementById("mygtukas-atimti");
const skaicius = document.getElementById("skaicius");
skaicius.innerText = 0;
let countskaicius = 0;

function prideti() {
    countskaicius++;
    skaicius.innerText = countskaicius;
}

function atimti() {
    countskaicius--;
    skaicius.innerText = countskaicius;
}

pridetiMygtukas.addEventListener('click', prideti);
atimtiMygtukas.addEventListener('click', atimti);