
// Užduotis 1: Skaičiavimų rezultatas po tam tikro laiko

document.addEventListener("DOMContentLoaded", () => {
    function calculate(number, timeInMs, callbackFunction) {
        setTimeout(() => {
            const result = number * number;
            callbackFunction(result)
        }, timeInMs);
    }

    function showResult(result) {
        console.log('Rezultatas:', result)
    }

    calculate(5, 1000, showResult);
});

