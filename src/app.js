import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// Old Syntax :

class OldSyntax {
    constructor() {
        this.name = 'Chandra';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.name);
console.log(getGreeting());

// New Syntax 

class NewSyntax {
    name = 'Chandra';
    getGreeting = () => {
        return `Hi, My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax.name);
console.log(newGetGreeting());
