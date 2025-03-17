
// Užduotis 5: Paprastas async/await su laukimu

function delay(ms) {
    return new Promise((success) => {
        setTimeout(() => {
            success("Laikas praėjo.")
        }, ms)
    })
}

async function waitForMessage(ms) {
    return await delay(ms);
}

waitForMessage(2000).then(message => console.log(message));