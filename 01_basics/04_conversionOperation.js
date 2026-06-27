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

    //-------------------------------------OPERATION -----------------------------------------------------------------------------------------------
    let valueu = 3 
    let negValue = -valueu;
    console.log(negValue);

    console.log(2+2);
     console.log(2*2);
      console.log(2-2);
       console.log(2**2);
        console.log(2/2);
         console.log(2%2);

   let str1 = "hello"
   let str2 = " hitesh"
   let str3 = str1 + str2
   console.log (str3);
  

    console.log(2+"2");
     console.log("2"+2);
      console.log(1+2+"2"); // 32 - agar string 1st mai hai toh sab string convert honge 
       console.log("1"+2+2); // 122  - lekin agar last mai string hai toh fir 1st string mai convert ho jayenge
        

        console.log(true);
        console.log(+true);
         console.log(+"");

         let num1,  nums2, nums3

         nums1 = nums2 = nums3 = 2+2

         let gamecounter = 100
         ++gamecounter;
         console.log(gamecounter); 

         //prefix and postfix concept

         /*
         Maan lo tumhare paas ₹100 hain.

Prefix (++money)

Pehle paise badhenge, phir value milegi.

let money = 100;

console.log(++money);

Steps:

Money 100 → 101 ho gaya.
Phir 101 print hua.

Output:

101
Postfix (money++)

Pehle current value milegi, phir value badhegi.

let money = 100;

console.log(money++);

Steps:

Pehle 100 print hua.
Uske baad money 101 ho gaya.

Output:

100

Agar baad mein check karoge:

console.log(money);

Output:

101
*/
    
    


