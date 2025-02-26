

// let vardai = ['Dovilė', 'Deimantė', 'Evelina', 'Justina'];
// console.log(vardai.length);

// for(let i = 0; i < vardai.length; i++) {
//     console.log(vardai[i])
// }

// vardai.forEach((vardas) => {
//     console.log(vardas)
// })


// UŽDUOTYS
// Uzduotis 1 - Peržvelgti tekstinių reikšmių masyvą

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

for(let i = 0; i <fruits.length; i++) {
    console.log(fruits[i])
}

// Užduotis 2 - Sumos skaičiavimas

const numbers = [1,3,7,8,2,10,4,5,6,9];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 5) {
        sum = sum + numbers[i];
    }
}

console.log('Total sum of numbers greater than 5: ' + sum);

// Užduotis 3 - Balsavimo tinkamumo nustatymas

const people = [ 
	{ name: 'Alice', age: 25, validResidence: true },
	{ name: 'Bob', age: 17, validResidence: true },
	{ name: 'Charlie', age: 30, validResidence: false },
	{ name: 'John', age: 13, validResidence: true },
	{ name: 'Amy', age: 24, validResidence: true }
];

const canVote = [];
const cantVote = [];

for(i=0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].validResidence === true){
        canVote.push(people[i])
    } else {
        cantVote.push(people[i])
    }
}

console.log('People who can vote')
for(i=0; i < canVote.length; i++) {
    console.log(canVote[i].name)
}

console.log("People who can't vote")
for(i=0; i < cantVote.length; i++) {
    console.log(cantVote[i].name)
}