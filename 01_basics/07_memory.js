/* MEMORY ALLOCATION KAISE HOTA HAI 
Two type of datatype(memory) avaiable in js - 
1. primitive   2.non-primitive


There are 2 type of memory-
1.Stack (for primitive datatype ) - jab bhi stack memory use hoti iska means 
yeh hai ki jo variable aapne declare aapko uska copy milta hai 
2.Heap (for reference datatype) - referenve milega , jo bhi change hoga
 vo original data mai hoga 


for eg - 
*/

let myYoutubename = "pranjaljaindotcom"
let anothername = myYoutubename 
anothername = "pranju@channel"
console.log(anothername);
console.log(myYoutubename);

/* 

    _________             _____________________________
   | user    |           |                             |
   | __two___|           |                             |
   | user    |           |{                            |
   | _one____|           |   email : "user@gmial.com"  |
   |myyoutube|           |   user : "user@ybl"         |
   |  name   |           | }                           |                             
   |_________|           |_____________________________|
   |another  |                     - Heap
    _name____
   |myyoutube|
   |__name___|

    - stack 

*/

let userOne = {
    email : " user@googlr.com" ,
    upi  : "user@ybl"
} 

let userTwo = userOne 

userTwo.email = "pranjal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
