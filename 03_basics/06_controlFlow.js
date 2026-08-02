/* if


if (condition) {
    // code to execute if condition is true

}
    
------------------------------------------------------------------------------------
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
*/
const day = 4;
switch(day) {
   case 1:
        console.log("Monday");
        break;
   case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
 }

// break control flow ko break kar deta hai means uske bad ka code nahi execute karenge 
//   and agr break nhi lagaya toh sare ccase execute honge except the default case.





/*
# Comparision operator =
1.<
2.>
3.<=
4.>=
5.== -> equal to -> check only value not type
6.!= -> not equal to -> check only value not type
7.=== -> strict equal to -> check both value and type
8.!== -> strict not equal to -> check both value and 



Short hand notation for if statement and we assume that it have explicit scope 

if(condition) statement;  // if condition is true then statement will be executed otherwise it will be skipped

for eg ->
if(balance > 500) console.log("You can buy this product"), // if balance is greater than 500 then only this statement will be executed otherwise it will be skipped
console.log("You can buy this product also"); // yeh dono print karega kyuki if ke andar sirf pehla statement hi execute hoga aur dusra statement if ke bahar hai isliye woh hamesha execute hoga

const iserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && (debitCard || loggedInFromGoogle || loggedInFromEmail)){
console.log("Welcome User");



truthy - if / else
  
const userEmail = []
 if(userEmail){
 console.log("got user email")
 }else{
    console.log("dont have user email");
}

//falsy values

false, 0, -0, BigInt On, "", null, underfined, Nan

inke aalwa jo bhi hai vo truthy value s hai

//truthy values
//"0" - string ke andar zero
//'false' - string ke andar hai
" " , [], {}, function(){} - truthy values 


1.Empty funct - function(){}
if(userEmail.length === 0){
    console.log("Array is Empty");
}


2. Empty object - {}

const emptyObj = {}
if(Object.Keys(emptyObj).length===0){
console.log("Object is empty");
}


//Nullish coalescing operator(??)
isme sirf aapko null and undefined dekhna hai 
Returns the right-hand value only if the left-hand value is null or undefined.
Unlike ||, it does not treat 0, false, or "" as missing values.


let val1;
val1 = 5 ?? 10

console.log(val1); - return 5



# Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log
("more than 80")

 

*/

