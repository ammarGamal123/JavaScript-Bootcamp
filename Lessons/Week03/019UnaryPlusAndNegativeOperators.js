/**
 * - + Unary Plus [Return Number if its Not Number]
 * - - Unary Negation [Return Number if its Not Number + Negate it]
 * 
 * Tests
 * 
 * -Normal Number
 * -String Number
 * -String Negative Number
 * -String Text
 * -Float
 * -Hexadecimal Numeral System => 0xFF
 * -null
 * -false
 * -true
 */


console.log(typeof (+100));
console.log(typeof (+"100"));
console.log(typeof (+"-100"));

console.log((+"Ammar"));
console.log(typeof(+123143.2134));
console.log(typeof(+0x15F));
console.log((+null)); // 0
console.log((+false)); // 0
console.log((+true + '\n')); // 1



console.log((-100));
console.log((-"100"));
console.log((-"-100"));

console.log((-"Ammar"));
console.log((-123143.2134));
console.log((-0x15F));
console.log((-null)); // 0
console.log((-false)); // 0
console.log((-true)); // 1

console.log(Number("1000"));












