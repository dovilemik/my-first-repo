
function vardas(callbackFunkcija, vardas) {
    return callbackFunkcija(vardas)
}

function printName(name) {
    console.log(name)
}

vardas(printName, 'dovile');