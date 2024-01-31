/**
 * Number Method
 * - Two Dots to call a method 
 * - toString()
 * - toFixed()
 * - parseInt()
 * - parseFloat()
 * - isInteger() [ES6]
 * - isNan() [ES6]
 */


console.log ((100).toString());
console.log (100.10.toString());


console.log (100000.55555.toFixed(2));

console.log (Number("1000 Ammar"));
console.log (+"1000 Ammar");
console.log (parseInt("1000 Ammar"));
console.log (parseInt("1000.500 Ammar"));
console.log (parseFloat("1000.500 Ammar"));

console.log (Number.isInteger("1000"));
console.log (Number.isInteger(1000.1324));
console.log (Number.isInteger(1000));


console.log (Number.isNaN(100));
console.log (Number.isNaN("Ammar" / 20));


