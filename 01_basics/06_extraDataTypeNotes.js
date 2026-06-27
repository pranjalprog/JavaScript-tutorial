// for interview purpose - JavaScript is Dynamically Typed Language.
//Meaning:
//Variable ka type runtime par decide hota hai, aur ek hi variable ka type badal bhi sakta hai.

/* in standard javascript documentation - 
    there are two type of datatype (kis tarah se data ko access kiya jata hai and memory mai rhkha jata hai)
  1. primitive datatype (call by value - 
  isme aap data ko copy karte ho kahi se kahi means orginal data hai uska refernce memory ka nahi diya jata ,
  inko copy karke diya jata hai alag se jo bhi aap chnages karte ho vo aap copy mai karte hao   ) 
     -  7 type 
            string , number , null , boolean , undefined , symbol , bigInt        
                
          
  2. non - primitive(reference type) -  Arrays , object ,functions

  javascript ka bhai hai type script 
    */

  const score = 100 
  const scoreValue = 100.3

  const isLoggedIn = false 
  const outsidetemp = null
  let userEmail;

  constId = Symbol('123')
  const anotherId = Symbol('123')

  //console.log(id === anotherId)

  const bigNumber = 12345678901234567890567890n



  // REFERENCE TYPE -  non primitive datatype

  const heros = ["shaktiman" , "nagraj" , "doga"] // Array 
  let myObj = {                                   // Object 
    name : " hitesh",
    age  : 22,
  }

  const myFunction = function( ){                                     // function syntax 
         console.log("Hello world")
  }

  console.log(typeof bigNumber);
  console.log(typeof outsidetemp);
  console.log(typeof scoreValue);
  console.log(typeof myFunction );


  /* Undefined = undefine 
     1.NUll = "object"
     2.boolean = "boolean"
     3.Number = "number"
     4.string = "string "
     5.object (native and does not   =  "object"
     implement[[call]])
     6.object(host and does not      =   "function"
     implement[[call]]) 
     7.object (host and does not   =  implementation - defined except mmay not 
     implement[[call]])               be "undefined", "boolean","number"or "string".
 */




  
  
