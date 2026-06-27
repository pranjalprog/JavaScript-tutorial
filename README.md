# JavaScript Tutorial

<u><strong>JavaScript</strong></u> is a high-level, interpreted programming language used to make web pages interactive and dynamic.

> HTML gives structure, CSS gives design, and JavaScript adds behavior.

---
## Client-side JavaScript -
 browser के अंदर चलती है। यह web page के elements (buttons, forms, images, etc.) को control करती है और user ke actions जैसे mouse click, form submit, aur page load par response deti hai.

Example:
Agar user button par click kare aur message show ho jaye, to ye client-side JavaScript hai.

## Server-side JavaScript - 
 server par chalti hai. Yeh database se data lena, files handle karna, aur user ki information ko process karna jaise kaam karti hai.

Example:
User login kare aur server database se password verify kare, to ye server-side JavaScript hai.

## Features of JavaScript

1. **Lightweight Language**  
   Uses less memory and resources, making it fast and easy to run.

2. **Interpreted Language**  
   Code is executed line by line by the JavaScript engine without separate compilation.

3. **Object-Oriented**  
   Uses objects and classes to organize code and data.

4. **Event-Driven**  
   Responds to events such as mouse clicks, keyboard input, or page loading.

5. **Cross-Platform**  
   Runs on different operating systems and devices using a web browser.

6. **Dynamic Typing**  
   Variable data types are determined automatically during execution.

7. **Supports Asynchronous Programming**  
   Can perform multiple tasks simultaneously without waiting for one task to finish using callbacks, promises, and `async/await`.

---

## Areas of Use

| Area | Usage |
|------|-------|
| **Web Development** | Interactive websites |
| **Frontend** | Buttons, forms, animations |
| **Backend** | Server-side programming |
| **APIs** | Fetching data from servers |

---

## Real-Life Examples

- **Netflix** web application
- **Facebook** website

---

## Advantages

- Easy to learn
- Fast execution in browsers
- Large community support
- Works on all modern browsers

---

## Disadvantages

- Large applications can become complex without proper structure.
- Browser compatibility issues may occur.
- Security limitations in client-side code.

---

## JAVA v/s JAVASCRIPT 
## JavaScript vs Java

| Feature | JavaScript | Java |
|---------|------------|------|
| **Typing System** | Dynamic typing (type declare karne ki zarurat nahi hoti) | Static typing (type pehle se declare karna padta hai) |
| **Example** | `let x = 10; x = "Hello";` | `int x = 10;`<br>`String name = "Hello";` |
| **Object Model** | Prototype-based language | Class-based language |
| **Variable Declaration** | Variables aur functions ko strictly define karne ki zarurat nahi | Variables aur methods ko declare karna padta hai |
| **Access Modifiers** | `public`, `private`, `protected` ka kam use | Access modifiers ka use karna padta hai |
| **Complexity** | Easy aur beginner-friendly | Thoda complex aur strict |
| **Inheritance** | Prototype inheritance | Class inheritance |
| **Syntax** | Simple aur flexible | Strict aur structured |
| **Use** | Web development aur scripting | Enterprise applications, Android apps |

### JavaScript Example

```javascript
let x = 10;
x = "Hello";

console.log(x); // Hello
```

### Java Example

```java
int x = 10;
String name = "Hello";

System.out.println(name);
```

### Conclusion

- **JavaScript** is a dynamically typed, prototype-based, and flexible language.
- **Java** is a statically typed, class-based, and strongly structured language.


## JavaScript Console

The **JavaScript Console** works similarly to the `eval()` function. The last expression entered in the console is evaluated and its result is returned.

### Example

```javascript
console.log(eval("3 + 5"));
```

**Output:**

```javascript
8
```

---

## Multi-line Input in the Console

By default, pressing **Enter** executes the code immediately.

### Ways to write multiple lines:

- If the code is incomplete (for example, `function foo() {`), the console automatically moves to the next line.
- Press **Shift + Enter** to insert a new line without executing the code.
- In Firefox, you can enable multi-line editor mode.

---

## What is IIFE?

**IIFE (Immediately Invoked Function Expression)** is a function that runs immediately after it is created.

```javascript
(function () {
  console.log("Hello");
})();
```

### Benefits of IIFE

- Prevents variables from affecting other code.
- Avoids conflicts between code snippets.
- Creates a separate scope.

---

## What is Strict Mode?

```javascript
"use strict";
```

Strict mode helps:

- Prevent common JavaScript mistakes.
- Improve code quality.
- Catch errors early.
- Make code more secure.

---

## Global Variables

A variable declared outside any function is called a **Global Variable**. It can be accessed from anywhere in the program.

### Example

```javascript
let message = "Hello World"; // Global variable

function greet() {
    console.log(message);
}

greet();
console.log(message);
```

**Output:**

```text
Hello World
Hello World
```

---

### Characteristics of Global Variables

- Declared outside any function or block.
- Accessible throughout the entire program.
- Remain in memory until the program ends.
- Can be accessed by all functions.

---

### Example with `var`

```javascript
var name = "John";

function showName() {
    console.log(name);
}

showName();
```

---

### Example with `let`

```javascript
let age = 20;

function displayAge() {
    console.log(age);
}

displayAge();
```

---

### Disadvantages of Global Variables

- Can be modified from anywhere.
- May cause naming conflicts.
- Makes large applications difficult to maintain.
- Increases the chances of bugs.

---

### Best Practice

Use global variables only when the value needs to be shared throughout the application. Otherwise, prefer local variables.

```javascript
function greet() {
    let message = "Hello";
    console.log(message);
}

greet();
```

Here, `message` is a **local variable** and cannot be accessed outside the function.

---

## Variable Hoisting

**Variable Hoisting** means that variable declarations are moved to the top of their scope before code execution.

### Hoisting with `var`

```javascript
console.log(x); // undefined
var x = 10;
```

JavaScript internally treats it as:

```javascript
var x;
console.log(x); // undefined
x = 10;
```

- The declaration (`var x`) is hoisted.
- The value assignment (`= 10`) is not hoisted.

---

### Hoisting with `let`

```javascript
console.log(y); // ReferenceError
let y = 20;
```

`let` variables are hoisted but remain in the **Temporal Dead Zone (TDZ)** until the declaration is reached.

---

### Hoisting with `const`

```javascript
console.log(z); // ReferenceError
const z = 30;
```

Like `let`, `const` is also in the **Temporal Dead Zone**.

---

### Function Hoisting

Function declarations are completely hoisted.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

**Output:**

```text
Hello
```

---

## Summary

| Keyword | Hoisted | Accessible Before Declaration |
|---------|----------|------------------------------|
| `var` | Yes | Yes (`undefined`) |
| `let` | Yes | No (`ReferenceError`) |
| `const` | Yes | No (`ReferenceError`) |
| Function | Yes | Yes |

---

### Important Points

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` remain in the **Temporal Dead Zone (TDZ)**.
- Function declarations are fully hoisted.
- It is considered good practice to declare variables before using them.

---
# Global Variables

- Global variables are properties of the global object.
- In browsers, the global object is `window`.
- In all JavaScript environments, `globalThis` can be used.

```javascript
let name = "John";

console.log(window.name);      // Browser
console.log(globalThis.name);  // All environments
```

---

# Constants (`const`)

- `const` creates a read-only variable.
- A constant must be initialized during declaration.
- Reassignment is not allowed.

```javascript
const PI = 3.14;
```

❌ Invalid:

```javascript
const x; // SyntaxError
```

### Object Mutation

```javascript
const user = {
    name: "John"
};

user.name = "David"; // Allowed
```

### Array Mutation

```javascript
const skills = ["HTML", "CSS"];

skills.push("JavaScript");

console.log(skills);
```

---

# JavaScript Data Types

JavaScript has **8 data types**.

### Primitive Data Types

1. `String`
2. `Number`
3. `Boolean`
4. `undefined`
5. `null`
6. `BigInt`
7. `Symbol`

### Non-Primitive

8. `Object`

```javascript
let name = "John";       // String
let age = 20;            // Number
let isLogin = true;      // Boolean
let x;                   // undefined
let y = null;            // null
let big = 123n;          // BigInt
```

---

# Dynamic Typing

JavaScript is a dynamically typed language.

```javascript
let answer = 42;

answer = "Hello";
```

The same variable can store different data types.

---

# Type Conversion

```javascript
"37" - 7;   // 30
"37" * 7;   // 259
```

### Convert String to Number

```javascript
Number("10");       // 10
parseInt("101", 2); // 5
parseFloat("3.14"); // 3.14
```

---

# Literals

Literals are fixed values written directly in code.

## Array Literal

```javascript
const fruits = ["Apple", "Mango", "Orange"];
```

## Object Literal

```javascript
const user = {
    name: "John",
    age: 20
};
```

## Boolean Literal

```javascript
true
false
```

## Numeric Literal

```javascript
10
3.14
0b1010
0xFF
```

## RegExp Literal

```javascript
const re = /ab+c/;
```

---

# String Literals

```javascript
"Hello"
'JavaScript'
```

### Template Literals

```javascript
const name = "John";

console.log(`Hello ${name}`);
```

Output:

```text
Hello John
```

---

# Escape Characters

| Character | Meaning |
|----------|----------|
| `\n` | New Line |
| `\t` | Tab |
| `\"` | Double Quote |
| `\'` | Single Quote |
| `\\` | Backslash |

```javascript
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```




