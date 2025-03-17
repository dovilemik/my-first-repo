
// Užduotis 3: Promise su laikmačiu

document.addEventListener("DOMContentLoaded", () => {
    function delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Laikas praėjo");
            }, ms);
        });
    }
    
    delay(2000).then(message => console.log(message));
})