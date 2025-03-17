
// // Užduotis 4: Promise su klaidos apdorojimu
document.addEventListener("DOMContentLoaded", () => {
    function conditionalDelay(ms, shouldResolve) {
        return new Promise((success, error) => {
            setTimeout(() => {
                if (shouldResolve === true) {
                    success('Sėkmė!')
                } else {
                    error('Klaida!')
                }
            }, ms)
        });
    }

    conditionalDelay(2000, true)
        .then(message => console.log(message))
        .catch(message => console.log(message));

    conditionalDelay(2000, false)
        .then(message => console.log(message))
        .catch(message => console.log(message));
})