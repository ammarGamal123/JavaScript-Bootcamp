/*
    Searching in Array with 
        -indexOf()
        -lastIndexOf()
        -includes(valueToFind , fromIndex[Opt]) [ES7]
 */


let myFriends = ["Hamza" , "Ahmed Khaled" , "Ahmed Omar" , "Yousef" , "Anas" , "Hamza"];

console.log(myFriends);

console.log(myFriends.indexOf("Yousef")); // index if (element to search , [starting point])

console.log(myFriends.indexOf("Yousef" , 5)); // index if (element to search , [starting point])

console.log(myFriends.lastIndexOf("Hamza" , -2));

console.log(myFriends.includes("Hamza" , 1));

if (myFriends.indexOf("Ammar") === -1){
    console.log("Not Found");
}