 /* date object millisecond mai calculate hoti hai toh aap jab bh date object 
 ko declare karenge ek string aati hai vo time hota hai 1970 se ab tak ka
 TC39 - javascript organization declare temporal api for storaging and calculating 
 date and time - but abhi yeh proposal hai future time ke liye .*/
/*

 let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toDateString());
 console.log(typeof myDate);   // interview question 

*/
 let myCreatedDate = new Date(2023, 0 , 23);
 console.log(myCreatedDate.toDateString());   // js mai month 0 se start hote hai  


 let myCreatedDate2 = new Date(2023, 0 , 23, 5, 3);
 console.log(myCreatedDate.toLocaleString()); 

 let myCreatedDate3 = new Date("01-14-2023");
 console.log(myCreatedDate.toLocaleString()); 


 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime()); 
  console.log(Math.floor(Date.now()/1000));  

  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth() + 1);
  console.log(newDate.getDay());

  
  newDate.toLocaleString('default',{
    weekday : "long"
  })


