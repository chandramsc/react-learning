class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.major) {
            description += ` This major is ${this.major}.`;
        }
        return description;
    }
}


// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Mead. I'am visiting from Pollachi.
// 2. Hi. I am Andrew Mead

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveler('Andrew Mead', 26, 'Pollachi');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'coimbatore');
console.log(other.getGreeting());