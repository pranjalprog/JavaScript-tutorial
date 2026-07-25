// {} - this is called scope of any funct or variable 
// dont confuse it with object {} because this is use for obj declaration.
var c = 300;          // yaha jo likhoge vo hai global scope 
let a = 20;
if(true) {           // block scope 
    let a = 10;
    const b = 20;
    var c = 30; 
    console.log("INNER :" , a);
}

console.log(a); // error - a is not define 
//console.log(b); // error - b is not define 
console.log(c); // 30 (print kar dega )


// window scope (DOM) mai and VS code (non - browser) mai scope aalg hote hai 

function one(){
    const username = "pranjal"

    function two(){
        const website = "MyName"
        console.log(username)
    }

    //console.log(website)

    two()
}

one()


 /* Q - supposed you have function and everytime it does console log

 function addone(num){
    return num + 1
}
    addone(5)

    const addTwo = function(num){   - yeh ek function expression hai , dono hi method hai
    return num + 2
    }

    addTwo(5)

    