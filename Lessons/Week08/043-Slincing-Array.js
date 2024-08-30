

let myFriends = ["Khaled" , "Ammar" , "Hamza" , "Omar" , "Yousef"];

console.log(myFriends);

console.log(myFriends.slice());

console.log(myFriends.slice(1));

console.log(myFriends.slice(2 , 4)); // Not Including End index

console.log(myFriends.slice(-2));    

console.log(myFriends.slice(1 , -1)); // Not Including End index

console.log(myFriends.slice(-myFriends.length));


myFriends.splice(2 , 1);

console.log(myFriends);

myFriends.splice(0 , 0 , "Samer" , "Gamal");
console.log(myFriends);

myFriends.splice(0 , 1 , "Samer" , "Gamal"); // starts from 0 and remove second element and add "Samer" & "Gamal" at the end
console.log(myFriends);

