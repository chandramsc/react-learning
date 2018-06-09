console.log("utils.js is working");

// inline export
// export const square = (x) => x * x; 
// export const add = (a,b) => a + b;
// export default (a,b) => a - b;

const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a,b) => a - b;

export {square, add, subtract as default}; // default export