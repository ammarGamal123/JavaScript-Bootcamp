/**
 * Number Challenge 
 */

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables and Return Integer
console.log (Math.trunc (Math.min(a , b , c , d)));

// Use Variable a + d One Time To Get The Needed Output
let e = a + d;
console.log (Math.trunc (e /(d * a)) + a * a); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log (Math.trunc(d));
console.log (Math.round(d));
console.log (Math.floor(d));
console.log (d.toFixed(0));  


// Use Variable b + d To Get This Values
let sum = b + d;

console.log (((Math.ceil(sum) - Math.ceil(d)) / 3).toFixed(2).toString()) // 66.67 => String
console.log (Math.trunc (sum / Math.ceil (d))) // 67 => Number
