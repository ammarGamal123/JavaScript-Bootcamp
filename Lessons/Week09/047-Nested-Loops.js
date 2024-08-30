

let products = ["Keyboards" , "Mouse" , "Pen" , "Pad" , "Monitor"];

let colors = ["Red" , "Green" , "Black"];

let models = [2020 , 2021];

for (let i = 0; i < products.length; i++){
    console.log(`# ${products[i]}`);

    console.log("Colors: ");
    for (let j = 0;j < colors.length; j++){
        console.log(colors[j]);
    }

    console.log("Models: ");
    for (let k = 0; k < models.length; k++){
        console.log(models[k]);
    }
}