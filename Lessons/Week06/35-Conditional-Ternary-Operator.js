
theName = "Mona";
let theGender = "Female";
let theAge = 30;


if (theGender === "Male")
    console.log("Mr.");
else 
    console.log("Mrs.");

theGender === "Male" ? console.log("Mr.") : console.log("Mrs.");

let result = theGender === "Male" ? "Mr." : "Mrs.";
console.log(result);

console.log(theGender === "Male" ? "Mr." : "Mrs.");

console.log(`Hello ${theGender === "Male" ? "Mr." : "Mrs."} ${theName}`);


theAge < 20  
    ? console.log(20) 
    : theAge > 20 && theAge < 60  
    ? console.log("20 to 60")  
    : theAge >= 60 
    ? console.log("larger than 60") 
    : console.log("UnKnown");



















