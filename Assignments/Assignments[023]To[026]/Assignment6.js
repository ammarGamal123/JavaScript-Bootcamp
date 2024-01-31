let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt (+(flt.toString()))); // 10
console.log(parseInt(Math.trunc(flt).toString())); // 10
console.log(parseInt(Math.floor(flt).toString())); // 10


