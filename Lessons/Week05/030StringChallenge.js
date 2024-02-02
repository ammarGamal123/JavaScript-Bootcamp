/**
 * String Challenge
 * All Solutions Must Be In One Chain
 * You Can Use Concatenate
 */

let a = "Elzero Web School";

// Include This Method in Your Solution [slice , charAt]
console.log (a.charAt(2).toUpperCase() + a.slice(3 , 6)); // Zero 

// 8 H
console.log (a.charAt(a.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array 
console.log (a.split(" " , 1)) // [Elzero]


// Use only substr Method + Template Literals in Your Solution
console.log (`${a.substr(0 , 6)} ${a.substr(-6)}`); // Elzero School 

// Solution Must Be Dynamic And String May Change
console.log (a[0].toLowerCase() + a.substring(1 , a.length - 1).toUpperCase() + a[a.length - 1]); // eLZERO WEB SCHOOl



