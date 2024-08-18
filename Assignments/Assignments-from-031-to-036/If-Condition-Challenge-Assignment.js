let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10 
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40 
    ? console.log("> 40")
    : console.log("Unknown");

console.log("\n\n");

let st = "Elzero Web School";

let needed = st.substring(0 , 3);
needed = needed.length.toString();
needed += st.substring(0 , 4).length.toString()


if (needed === "34") {
    console.log("Good");
} 
    
    // W Position May Change
let ch = st[st.search('W')].toLowerCase();
if (ch === "w") {
      console.log("Good");
}
else {
  console.log("W Position May Change");
}
if (st.length !== "string") {
      console.log("Good");
} 



let type = typeof st.length;
if (type.toString() === "number") {
      console.log("Good");
} 

let findIndex = st.search("Elzero");
let str = st.substring(findIndex , "Elzero".length);
str += str;

if (str === "ElzeroElzero") {
      console.log("Good");
}
else console.log("can't")