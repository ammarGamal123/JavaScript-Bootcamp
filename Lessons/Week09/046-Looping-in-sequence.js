

let myFriends = [1 , 2 , "Osama" , "Ahmed" , "Sayed" , "Ali" , 123];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++){
    if (typeof myFriends[i] === "string")
        onlyNames.push(myFriends[i]);
}

console.log(onlyNames);