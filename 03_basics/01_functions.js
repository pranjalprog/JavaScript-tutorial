/*function sayMyName(){  // yeh pura functio defination hai 
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("l");
}
 sayMyName()     // function ka reference

function addTwoNumbers(number1, number2){ // yeh (number1, number2) function parameter hai 
    console.log(number1 + number2);
}

const result = addTwoNumbers(3,4) // yeh (3,4) function argument hain
console.log("Result:" , result)



function addTwoNumbers(number1, number2){ // yeh (number1, number2) function parameter hai 
    let result = number1 + number2
    return result              // acc to function defination return ke bad kuch bhi print nahi hota function return pe khatam ho jata hai 
    console.log("pranjal") 
}

const result = addTwoNumbers(3,4) // yeh (3,4) function argument hain
console.log("Result:" , result)


function addTwoNumbers(number1, number2){ // yeh (number1, number2) function parameter hai 
    return number1 + number2 
}

const result = addTwoNumbers(3,4) // yeh (3,4) function argument hain
console.log("Result:" , result)


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in` 
}

console.log(loginUserMessage( )) // if kuch value pass nahi kari toh undefine aayega 
*/

// Shopping card - dont know kitne argument aane wale hai toh aapko usi hisab se parameter ready karne hote hai 
// ... -> rest operator and spilt operator 
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))


const user = {
    username : " sam ",
    price : 99
}
 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

handleObject(user)


const arr = [ 200,400,600,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr));