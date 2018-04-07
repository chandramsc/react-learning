// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //  console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name : "Chandra",
    cities : ['pollachi','coimbatore','udumalai'],
    printPlacedLived : function () {
        
        // Normal Method - this keyword not working
        // this.cities.forEach(function(city){
        //     console.log(this.name+' has lived in '+ city);
        // });

        // Arrow method - this keyword is working
        // this.cities.forEach((city) => {
        //     console.log(this.name+' has lived in '+ city);
        // });

        //map method - is remathod like forEach function
        return this.cities.map((city) => this.name+' has lived in '+city);
    }
};

// user.printPlacedLived();
console.log(user.printPlacedLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied

    numbers: [10,20,30],
    multipleBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multipleBy);
    }
};

console.log(multiplier.multiply());