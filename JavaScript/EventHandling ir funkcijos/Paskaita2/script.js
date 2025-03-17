document.addEventListener('DOMContentLoaded', () => {
    const manoForma = document.getElementById('mano-forma');

    async function loadUsers() {
        const users = await fetch('http://localhost:3000/users').then(users => users.json())
        return users;
    }


    // Funkcija, kuri nurodo kaip atvaizduoti userius
    async function displayUsers() {
        const users = await loadUsers();
        const usersListElement = document.getElementById('users-list');
        const ulElement = document.createElement('ul');

        users.forEach(user => {
            console.log(user);
            const editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.innerText = 'Edit';
            const li = document.createElement('li');
            let message = `${user.vardas} ${user.pavarde}`
            if (user.amzius) {
                message += `, ${user.amzius} m.`
            } else {
                message += ', amžius nežinomas.'
            }
            li.innerHTML = message;
            li.appendChild(editButton);
            ulElement.appendChild(li);
        })
        usersListElement.appendChild(ulElement);
    }

    //atvaizdavimo funkcija iskvieciama
    displayUsers();

    manoForma.addEventListener('submit', function (event) {
        event.preventDefault();
        const formosDuomenys = new FormData(manoForma);
        const payload = Object.fromEntries(formosDuomenys);

        const vardasReiksme = payload.vardas;
        const pavardeReiksme = payload.pavarde;
        const vardoDiv = document.getElementById('vardo-div');
        const pavardeDiv = document.getElementById('pavardes-div');

        // formos error nuresetinimas
        vardoDiv.classList.remove('error');
        pavardeDiv.classList.remove('error');

        // ar vardo laukas netuscias
        if (!vardasReiksme.trim()) {
            alert('Vardas laukas yra tuscias');
            vardoDiv.classList.add('error');
            return;
        }
        // ar vardo laukas netuscias
        if (!pavardeReiksme.trim()) {
            alert('Pavardes laukas yra tuscias');
            pavardeDiv.classList.add('error');
            return;
        }
        // patikrinam ar ivesta yra tik raides
        if (!/^[A-Za-z]+$/.test(vardasReiksme) || !/^[A-Za-z]+$/.test(pavardeReiksme)) {
            alert('Leidziama ivesti tik raides');
            if (!/^[A-Za-z]+$/.test(vardasReiksme)) {
                vardoDiv.classList.add('error');
            }
            if (!/^[A-Za-z]+$/.test(pavardeReiksme)) {
                pavardeDiv.classList.add('error');
            }
            return;
        }

        console.log(payload)
        // kreipimasis i backenda, kad payload issaugoti

        fetch(
            'http://localhost:3000/users',
            {
                method: 'POST',
                body: JSON.stringify(payload)
            }
        )
    })
})
