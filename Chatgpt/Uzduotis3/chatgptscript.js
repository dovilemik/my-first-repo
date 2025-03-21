// // Šis kodas gali būti optimizuotas keliais būdais. Pirmiausia, galite sumažinti kodo dubliavimą ir padaryti jį švaresnį bei efektyvesnį naudodami filter metodą, o taip pat peržiūrėti kintamųjų deklaraciją. Be to, naudoti console.log užrašus gali būti efektyvesnė naudojant map metodą, kad gautumėte tik vardus.
// Štai optimizuotas kodas:

// Užduotis 3 - Balsavimo tinkamumo nustatymas

const people = [
    { name: 'Alice', age: 25, validResidence: true },
    { name: 'Bob', age: 17, validResidence: true },
    { name: 'Charlie', age: 30, validResidence: false },
    { name: 'John', age: 13, validResidence: true },
    { name: 'Amy', age: 24, validResidence: true }
];

// Filtruojame žmones, kurie gali balsuoti ir kurie negali
const canVote = people.filter(person => person.age > 18 && person.validResidence);
const cantVote = people.filter(person => person.age <= 18 || !person.validResidence);

// Spausdiname rezultatus
console.log('People who can vote');
console.log(canVote.map(person => person.name).join(', '));

console.log("People who can't vote");
console.log(cantVote.map(person => person.name).join(', '));