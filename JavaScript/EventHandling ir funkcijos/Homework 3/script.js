// Užduotis 3 - Formos pateikimo tikrinimas

const form = document.getElementById("mano-forma");
console.log(form);

form.addEventListener('submit', function (event) {

    event.preventDefault();
    const formosDuomenys = new FormData(form); 
    const payload = Object.fromEntries(formosDuomenys); 

    if (payload.text.trim() === "") {
        alert('Laukas "Tekstas" negali būti tuščias!')
        return;
    }

    const email = payload.email.trim();
    if (email === "") {
        alert('Laukas "El.paštas" negali būti tuščias!')
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Prašome įvesti galiojantį el. pašto adresą!')
        return;
    }

    const age = payload.age.trim();
    if (age === "") {
        alert('Laukas "Amžius" negali būti tuščias.')
        return;
    }

    if (age < 18 || age > 99) {
        alert('Amžius turi būti skaičius tarp 18 ir 99!')
        return;
    }

    alert('Forma pateikta sėkmingai.')
    console.log(payload);
})