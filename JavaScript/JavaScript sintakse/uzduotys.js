// 1 užduotis - Kintamieji
const vardas = 'Dovilė';
const amzius = 30;
const arPilnametis = true;

console.log(vardas);
console.log(amzius);
console.log(arPilnametis);

// 2 užduotis - Kintamieji ir kontrolės sakiniai
const person = {
    age: 18,
    isCitizen: true,
    daysLivedInCountry: 15,
}

if (person.age >= 18 && person.isCitizen == true && person.daysLivedInCountry >= 30) {
    console.log('Asmuo balsuoti gali.')
} else {
    console.log('Asmuo balsuoti negali')
}

// 3 užduotis - Kintamieji ir kontrolės sakiniai

const age = 62;
const bmi = 29;
const smokes = false;
let riskLevel;
let advice;

if (age < 30 && bmi < 25 && smokes === false) {
    riskLevel = 'Maža rizika';
    advice = 'Puiku! Palaikykite sveiką gyvenimo būdą.'
} else if ((age >=30 && age <=50) && (bmi > 25 && bmi < 30) && smokes === false) {
    riskLevel = 'Vidutinė rizika';
    advice = 'Jūsų sveikata pakankamai gera, bet verta stebėti KMI ir būti fiziškai aktyviam.'
} else if ((age > 50 || bmi >= 30 || smokes === true) && !(age > 50 && bmi >= 30 && smokes === true)) {
    riskLevel = 'Didelė rizika';
    advice = 'Rizika padidėjusi. Apsvarstykite sveikesnį gyvenimo būdą ir pasitarkite su gydytoju.'
} else if (age > 50 && bmi >= 30 && smokes === true) {
    riskLevel = 'Labai didelė rizika';
    advice = 'Jūsų sveikatos rizika yra labai aukšta! Būtina kuo greičiau imtis pokyčių ir kreiptis į specialistą.'
} else {
    riskLevel = 'Neapibrėžta rizika';
    advice = 'Sunku nustatyti tikslią riziką. Pasitarkite su gydytoju dėl išsamesnio įvertinimo.'
}

console.log('Amžius: ' + age);
console.log('KMI: ' + bmi);
if (smokes === true) {
    console.log("Ar rūko: Taip")
} else {
    console.log('Ar rūko: Ne')
};
console.log('Rizikos lygis: ' + riskLevel);
console.log('Patarimas: ' + advice)