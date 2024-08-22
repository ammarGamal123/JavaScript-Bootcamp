

let myFriends = ["Ammar" , "Osama" , "Yousef" , ["Marwan" , "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[3][1]}`);

console.log(myFriends);

myFriends[2] = "Gamal";

console.log(myFriends);

myFriends[3] = "Fayez";

console.log(myFriends);

myFriends[3] = ["Mohamed" , "Saed"];

console.log(myFriends);

console.log(Array.isArray(myFriends));