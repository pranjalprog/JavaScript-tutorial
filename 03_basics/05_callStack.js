 /* Javasript Call Stack
  * The call stack is a mechanism for an interpreter (like the JavaScript interpreter) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function.
  * The call stack has a simple structure: it is a stack data structure that stores information about the active subroutines of a computer program.
  * The call stack is a stack data structure, which means that it follows the Last In First Out (LIFO) principle. The last function that was called is the first one to be completed and removed from the stack.
  * When a function is called, it is added to the top of the call stack. When the function completes, it is removed from the top of the stack, and control is returned to the function that called it.
  * If a function calls another function, the new function is added to the top of the stack, and so on. This continues until all functions have completed and the stack is empty.
  * If a function calls itself recursively, each recursive call adds a new frame to the top of the stack. If there are too many recursive calls, this can lead to a "stack overflow" error.
  * Understanding how the call stack works is important for debugging and optimizing code, as it can help identify issues such as infinite loops or excessive recursion.
  

    * JAVAsCRIPT EXECUTION CONTEXT - jo bhi file bani hai vo js run kaise karegi
    * The execution context is an abstract concept that holds information about the environment within which the current code is being executed.
    *  It contains information about the variables, functions, and objects that are currently in scope, as well as the value of the this keyword.
    * There are three types of execution contexts in JavaScript: global execution context, function execution context, and eval execution context.
    * js 2 phrases mai run karti hai - 1. Creation phase - memory allocation hoti hai , 2. Execution phase - code execute hota hai
    * 1. Creation phase - memory allocation hoti hai
        * Global execution context ke liye - global object create hota hai (browser mai window object) , this keyword ko point karta hai global object ko , aur function ke liye memory allocate hoti hai aur variable ke liye undefined value assign hoti hai
        {} - this is global execution context - jaha bhi global EC banaega vo uska this ko refer karke rhka jata 
         and browser mai window object create hota hai aur this keyword ko point karta hai window object ko
    * 2. Execution phase - code execute hota hai
        * Global execution context ke liye - code execute hota hai aur function ke liye memory allocate hoti hai aur variable ke liye value assign hoti hai
        * Function execution context ke liye - code execute hota hai aur function ke liye memory allocate hoti hai aur variable ke liye value assign hoti hai
        * Function execution context ke liye - code execute hota hai aur function ke liye memory allocate hoti hai aur variable ke liye value assign hoti hai
    * 3. Execution context stack - jab bhi koi function call hota hai to uska execution context stack mai push ho jata hai aur jab function complete ho jata hai to uska execution context stack mai pop ho jata hai
    * 4. Call stack - jab bhi koi function call hota hai to uska execution context stack mai push ho jata hai aur jab function complete ho jata hai to uska execution context stack mai pop
    * 
    * 
call stack - call stack is a stack data structure that stores information about the active subroutines of a computer program. It is used by the JavaScript interpreter to keep track of its place in a script that calls multiple functions. The call stack follows the Last In First Out (LIFO) principle, meaning that the last function that was called is the first one to be completed and removed from the stack. When a function is called, it is added to the top of the call stack, and when it completes, it is removed from the top of the stack, returning control to the function that called it. If a function calls another function, the new function is added to the top of the stack, and this continues until all functions have completed and the stack is empty. If a function calls itself recursively, each recursive call adds a new frame to the top of the stack, which can lead to a "stack overflow" error if there are too many recursive calls. Understanding how the call stack works is important for debugging and optimizing code, as it can help identify issues such as infinite loops or excessive recursion.

        
