const user = {
    username: "pranjal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},this.welcome to website`);
        //console.log(this); // this is return user object(upar wala object)
    }
}
//user.welcomeMessage()
//user.username = " pranjal jain"
//user.welcomeMessage()

//console.log(this);  // this is return {}  - empty objecct 
// but in window - it return window object(window object is global object in browser)

//function mai this function work nahi karta 
/*function chai(){
    let a = 10;
    console.log(this.a); // function ke andar this undefined return karega kyuki function ke andar this global object ko point karta hai aur global object me a variable nahi hai isliye undefined return karega
}

chai()*/

/*const chai = function() {
    let username = "pranjal";
    console.log(this.username); // function ke andar this undefined return karega kyuki function ke andar this global object ko point karta hai aur global object me username variable nahi hai isliye undefined return karega
}
chai()
*/

const chai = () => {
    let username = "pranjal";
    console.log(this.username); // arrow function ke andar this global object ko point karta hai aur global object me username variable nahi hai isliye undefined return karega
}
chai()

/*const addTwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addTwo(10, 20)); // 30
 */

// implicit return in arrow functionv - one line mai return karna hai to curly braces nahi lagate hai 
const addTwo = (num1 , num2) => num1 + num2;
console.log(addTwo(10, 20)); // 30

//implicit return in arrow function - one line mai return karna hai to curly braces nahi lagate hai but tume normal backertics laga shakte ho but agar curly braces lagate ho to return statement lagana padega

//expilicit return function mai curly braces lagane padte hai return statement ke liye 

