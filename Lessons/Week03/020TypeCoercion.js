

let a = "10";
let b = 20;
let c = true;

console.log (a + b); 
console.log (+a + b);
 // if you want a string to be behaved as a Number you have to add +beforeString

console.log (a - b); // 10 - 20 = -10 in this case I don't need to add + to be behaved as a Number 

console.log (-a + b); // -10 + 20 = 10
console.log (-a - b); // -10 - 20 = 30


console.log (a + b + c);
console.log (+a + b + c);
console.log (c);

console.log (+"");

console.log ("" - c);

console.log ("" - 2);
console.log ("" + 2);