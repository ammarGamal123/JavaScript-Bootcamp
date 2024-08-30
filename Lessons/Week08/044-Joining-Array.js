

let myFriends = ["Khaled" , "Anas" , "Omar" , "Hamza" , "Alkelawy"];
let myNewFriends = ["Samer" , "Gamal"];
let mySchoolFriends = ["Bassel" , "Abdallah"];

let allFriends = myFriends.concat(myNewFriends , mySchoolFriends);

console.log(allFriends);

console.log(allFriends.join()); // , is the separator by default
console.log(allFriends.join(" | ").toUpperCase());