/**
 * String Methods
 * - substring (Start [Mandatory] , End [Opt] Not Including End)
 * --- Start > End Will Swap
 * --- Start < 0 It Starts With 0
 * --- Use Length To get Last Character
 * 
 * - substr (Start [Mand] , Character to extract)
 * --- start >= Length = ""
 * --- Negative Start From End
 * 
 * - includes (Value [Mand] , Start [Opt] Default 0) [ES6]
 * - startsWith (Value [Mand] , Start [Opt] Default 0) [ES6]
 * - endsWith (Value [Mand] , Length [Opt] Default Full Length) [ES6]
 * 
 */

let a = "Elzero Web School";

console.log (a.length);

console.log (a.substring(2 , 6));
console.log (a.substring(6 , 2));
console.log (a.substring(-10 , 6)); // 0 - 6
console.log (a.substring (a.length - 5 , a.length - 3));

console.log (a.substr(0 , 6));
console.log (a.substr(17));
console.log (a.substr(-3));
console.log (a.substr(-5 , 2));

console.log (a.includes("Web"));
console.log (a.includes("Web" , 8));

console.log (a.startsWith("E"));
console.log (a.startsWith("E" , 2));
console.log (a.startsWith ("zero" , 2));


console.log (a.endsWith("l"));
console.log (a.endsWith("o" , 6));