let score = "33"
//let score = "33abc" iska bhi typeof = number dega but 
// jab print karwayenge tab yeh 
// NAN retutn karege means Not a Number 
// (use for cheacking )
// let score = null then its return 0
// let score = undefine return NAN
// ler score = return NAN  

let value = Number(score)

console.log(typeof(value))
console.log(value)

/* CONVERSION 
   "33" =>  33 (convert)
   "33abc" => NAN (not convert) but return number datatype 
    true => 1  and false => 0
    */
    let isLoggedIn = ""
    let booleanIsLoggedIn = Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn)

    // 1 => true ; 0 => false 
    // "" => false 
    // "hitesh" => true 

    let somenumber = 33
    let stringNumber = String(somenumber)
    console.log(stringNumber)
    console.log(typeof(stringNumber))
