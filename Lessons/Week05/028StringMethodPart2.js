/**
 * String Methods
 * - indexOf(Value [Mandatory] , Start [Opt])
 * - lastIndexOf(Value [Mandatory] , Start[Opt])
 * - slice(Start[Mandatory] , End[Opt] Not Include End)
 * - repeat(Times) [ES6]
 * - split(Separators[Opt] , Limit[Opt])
 */

let a = "Elzero Web School";

console.log (a.indexOf("Web"));
console.log (a.indexOf("Web" , 8));
console.log (a.indexOf("o")); // 5
console.log (a.lastIndexOf("o")); // 15

console.log (a.slice(2 , 6));
console.log (a.slice(-5 , -3));

console.log (a.repeat(5));

console.log (a.split(""));
console.log (a.split(" "));
console.log (a.split("" , 5));
console.log (a.split (" " , 2));





