var namevar = 'chandra';
var namevar = 'dravid';

console.log("output", namevar);

let namelet = "chandra";
namelet = "sekar";
console.log("values ", namelet);

// Block level scoping

const fullName = "chandra sekar";
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);