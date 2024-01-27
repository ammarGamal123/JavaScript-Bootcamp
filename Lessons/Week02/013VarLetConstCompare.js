/*
    var 
    - Redeclare (Yes)
    - Access Before Declare (undefined)
    - Variable Scope Drama []
    - Block or Function Scope 

    let 
    - Redeclare (No => Error)
    - Access Before Declare (No => Error)
    - Variable Scope Drama []
    - Block or Function Scope 

    const 
    - Redeclare (No => Error)
    - Access Before Declare (No => Error)
    - Variable Scope Drama []
    - Block or Function Scope 
    */

// redeclare in var , let , const    
var a = 1;
console.log (a);

console.log(a1);
var a1 = 12;

var a = 123;
console.log(a);

let b = 2;
// let b = 3; Not Allowed

const c = 3;
//const c = 4; // Not Allowed 



// Access Before Declare 
console.log(user);
var user = "Ammar"; // undefined BAD

// console.log(userName);
// let userName = "Ammar"; // cannot access userName before initialization

console.log(uerName2);
const userName2 = "Ammar";
// cannot access userName before initialization



// Variable Scope Drama 
var aabb = 1234;
// Every variable with datatype var is inserted in the object window which causes Variable Scope Drama

let aabb2 = 1234;
const aabb3 = 1234;
// NO Variable Scope Drama will be created 