// console.log("destructuring");

// const person = {
//     name : 'chandra',
//     age: 26,
//     location : {
//         city: 'pollachi',
//         temp: 98
//     }
// };

// const {name, age} = person;
// const {city, temp : temperature } = person.location;

// console.log(`${name} is ${age}`);
// if(city && temperature) {
//     console.log(`It's is ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Publisher' } = book.publisher;

console.log(publisherName);