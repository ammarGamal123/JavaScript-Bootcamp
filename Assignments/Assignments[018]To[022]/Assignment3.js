let num = "10";

// Solution One
console.log (+num + +num); // 20

// Solution Two
console.log (+num * (true + true))// 20

// Solution Three
console.log (+num-- + +num + true); // 20
+num ++; // necessary for the last calculation
// Solution Four
console.log ((+num) / (true + true) * (true + true + true + true)); // 20