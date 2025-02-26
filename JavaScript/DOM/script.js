
let heading1tags = document.getElementsByTagName('h1');
// console.log(heading1tag)

for(let i = 0; i < heading1tags.length; i++) {
    if(i === 0) {
        heading1tags[i].innerText = i;
        heading1tags[i].style.backgroundColor = 'yellow';
    }

    if(i === 1) {
        heading1tags[i].innerHTML = '<span>' + i + '</span';
        heading1tags[i].innerHTML = `<span>${i}</span>`
    }
}

//apsibrezti kintamaji
let apieManeParagrafas = document.getElementById("apie-mane");
apieManeParagrafas.innerText = 'Tekstas apie mane';

let divElementas = document.createElement('div');
divElementas.innerText = 'Naujas div elementas';
divElementas.classList.add('doviles-divas')
console.log(divElementas);
document.body.appendChild(divElementas);

