// named export isAdult(18) - true if adult, otherwise false
// names export canDrink(21) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console

const isAdult = (age) => age >=18;
const canDrink = (age) => age >=21;

export {isAdult, canDrink};