
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

for (i = 0; i < people.length; i++) {
    if (people[i].age > 18 && people[i].validResidence === true) {
        canVote.push(people[i])
    } else {
        cantVote.push(people[i])
    }
}

console.log('People who can vote')
for (i = 0; i < canVote.length; i++) {
    console.log(canVote[i].name)
}

console.log("People who can't vote")
for (i = 0; i < cantVote.length; i++) {
    console.log(cantVote[i].name)
}