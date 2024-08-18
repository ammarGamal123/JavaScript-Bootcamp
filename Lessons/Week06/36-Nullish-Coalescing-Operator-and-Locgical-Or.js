
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));


let price = null;

console.log(`The Price is ${price || 200}`); // Null + undefined + any falsy value if one of those it will return the step value

console.log(`The Price is ${price ?? 200}`); // Null + undefined if one of those it will return the step value



