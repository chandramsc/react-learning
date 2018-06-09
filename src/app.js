// import subract  , { square, add } from './utils.js';

// console.log("app.js file is working");
// console.log(square(4));
// console.log(add(100, 10));
// console.log(subract(100, 50));

// Note : use any name for default variable name (ex: original name is isSeniorCitizen, but you used isSenior)
import isSenior, { isAdult, canDrink } from './person.js';

console.log(isAdult(18));
console.log(canDrink(20));
console.log(isSenior(64));

// Setting the default export and function
// Grap the default and call it