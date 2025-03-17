
// Užduotis 6: Async/await su API užklausa

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        return await response.json();
    } catch(error) {
        return error;
    }
}

fetchData()
    .then(message => console.log(message))
    .catch(message => console.error('Klaida:', message))