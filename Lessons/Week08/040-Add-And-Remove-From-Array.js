


let myFriends = ["Hamza" , "Ahmed Khaled" , "Ahmed Omar" , "Yousef" , "Anas"];

console.log(myFriends);

myFriends.unshift("Ahmed Yasser" , "Abdullaziz"); // Add elements in the front of the array

console.log(myFriends);

myFriends.push("Fouly" , "Ahmed Yassin");

console.log(myFriends);

myFriends.shift(); // remove first element in the array 

console.log(myFriends);

let first = myFriends.shift();

console.log(`First Name removed ${first}`);

let last = myFriends.pop();

console.log(`Last Name removed ${last}`);
