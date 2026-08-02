/* if


if (condition) {
    // code to execute if condition is true
}
    

const isUserLoggedIn = true;
const temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day");
}else{
    console.log("It's a cold day");
}

console.log("This will always run");

const score = 85;
if(score >= 90){
    const power = "flying";
    console.log(`You have ${power} power`);
}



const balance = 1000;
if(balance > 500) console.log("You can buy this product");

const balance = 100;
if(balance > 500) console.log("You can buy this product"),
console.log("You can buy this product also"); // yeh dono print karega kyuki if ke andar sirf pehla statement hi execute hoga aur dusra statement if ke bahar hai isliye woh hamesha execute hoga



const balance = 100;
if(balance > 500) {
    console.log("You can buy this product");
} else if (balance > 200) {
    console.log("You can buy this product but not this product");
} else if (balance > 100) {
    console.log("You can buy this product but not this product and this product");
} else {    
    console.log("You cannot buy any product");
}



const userLoggedIn = true;
const isAdmin = true;

if(userLoggedIn && isAdmin){
    console.log("Welcome Admin");  // output - Welcome Admin
}



const userLoggedIn = true;
const isAdmin = false;
if(userLoggedIn ||  isAdmin){
   console.log("Welcome User"); // output - Welcome User
}





switch (key) {
    case value:
        // code to be executed if key === value
        break;
    case value2:
        // code to be executed if key === value2
        break;
    default:
        // code to be executed if key doesn't match any case
}

const day = "Monday";
switch (day) {
    case "Monday":  
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's some other day");
}   

