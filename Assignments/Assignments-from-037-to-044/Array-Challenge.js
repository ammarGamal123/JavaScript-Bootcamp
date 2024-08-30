
let zero = 0;
let counter = 3;

let myFriends = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];

// write code here

console.log(myFriends.slice(zero , counter + true).reverse()); // ["Osama" , "Elham" , "Mazero" , "Ahmed"]


console.log(myFriends.slice(counter - true - true , counter ).reverse()) // ["Elham" , "Mazero"]


let helper = myFriends[counter - true].slice(zero , counter - true); // El
let helper2 = myFriends[counter - true - true].slice(-counter - true);//zero
console.log(helper + helper2); // Elzero

console.log(myFriends[myFriends.length - 1].slice(-true) + zero); // r0