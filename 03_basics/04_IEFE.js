/* IIFE (Immediately Invoked Function Expression)
1.we use this because we want to create a function and execute it immediately.
2. It helps in avoiding global namespace pollution.
3. It is useful for initializing code that needs to run once when the script is loaded.
*/

(function pranjal() {
    // named IEFE 
    console.log(`DB Connected`);
})();// DB Connected - humne function ko define kiya aur uske baad usko immediately call kar diya , uska backet mai band karke 
// yeh aise hai function ko call karte hai () inki help se lekin humne ab pure function ko () iske andar likh diya jaise => function mai kiya tha 
//()() -  IIFE (Immediately Invoked Function Expression) - Anonymous function

(  ()  => {
    // Anonymous IEFE
    console.log(`DB Connected`);
} )() //  show error - kyuki upar mai IEFE function ko end nahi kiya , usko end karn ke liye ; inko lagna padta hai 
// ab jab isko fir run karoge toh yeh output yeh de dega -




