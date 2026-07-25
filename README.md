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
| Declaration | Global Scope | `window` Property |
| ----------- | ------------ | ----------------- |
| `var`       | Yes          | Yes               |
| `let`       | Yes          | No                |
| `const`     | Yes          | No                |

> `globalThis` is the standard way to access the global object in all JavaScript environments.

```javascript
console.log(globalThis);
```

---

# JavaScript Environment

An **environment** is the platform where JavaScript code runs.

JavaScript itself is only a programming language. It requires an environment to execute the code and provide additional features.

### Browser Environment

- Runs inside web browsers.
- Global object: `window`
- Provides browser APIs such as:
  - `document`
  - `alert()`
  - `localStorage`

```javascript
alert("Hello");
console.log(document.title);
```

### Node.js Environment

- Runs JavaScript outside the browser.
- Global object: `global`
- Provides server-side APIs.

```javascript
console.log(__dirname);
```

### `globalThis`

`globalThis` is a standard object that works in all JavaScript environments.

```javascript
console.log(globalThis);
```

- Browser → `globalThis === window`
- Node.js → `globalThis === global`

### Summary

An environment is the platform where JavaScript code executes and provides additional objects and APIs to the language.

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
# JavaScript String Prototype

When you inspect a string in the browser console, you'll see its prototype (`[[Prototype]]`), which contains all the built-in methods available for strings.

```javascript
const name = "Pranjal";

console.dir(name);
```

### Output (Simplified)

```text
"Pranjal"

[[Prototype]]: String
├── at()
├── charAt()
├── charCodeAt()
├── codePointAt()
├── concat()
├── endsWith()
├── includes()
├── indexOf()
├── lastIndexOf()
├── localeCompare()
├── match()
├── matchAll()
├── normalize()
├── padEnd()
├── padStart()
├── repeat()
├── replace()
├── replaceAll()
├── search()
├── slice()
├── split()
├── startsWith()
├── substr()
├── substring()
├── toLowerCase()
├── toUpperCase()
├── toLocaleLowerCase()
├── toLocaleUpperCase()
├── trim()
├── trimStart()
├── trimEnd()
├── valueOf()
├── toString()
└── [Symbol.iterator]()

[[PrimitiveValue]]: "Pranjal"
```

## What is `[[Prototype]]`?

`[[Prototype]]` is the object from which another object inherits properties and methods.

In the case of a string, all methods like `slice()`, `split()`, `trim()`, `toUpperCase()`, etc., come from `String.prototype`.

```javascript
const name = "Pranjal";

console.log(name.toUpperCase()); // PRANJAL
console.log(name.slice(0, 4));   // Pran
console.log(name.includes("jan"));// true
```

## What is `[[PrimitiveValue]]`?

`[[PrimitiveValue]]` is the actual value stored inside the string object.

```text
[[PrimitiveValue]]: "Pranjal"
```

This means the real string value is:

```javascript
"Pranjal"
```

---

## Summary

- `[[Prototype]]` → Contains all built-in String methods.
- `String.prototype` → The object that provides methods like `slice()`, `trim()`, `split()`, etc.
- `[[PrimitiveValue]]` → The actual string value (`"Pranjal"`).
- JavaScript automatically wraps primitive strings with a temporary String object when you call a method on them.


# JavaScript String Methods

## at()

**Definition:**
The `at()` method returns the character at the specified index. It supports both positive and negative indexes.

**Example:**
```javascript
const str = "Pranjal";
console.log(str.at(-1)); // l
```

---

## charAt()

**Definition:**
The `charAt()` method returns the character at a specified index. It only works with positive indexes.

**Example:**
```javascript
const str = "Pranjal";
console.log(str.charAt(2)); // a
```

---

## charCodeAt()

**Definition:**
The `charCodeAt()` method returns the Unicode (UTF-16) value of the character at the specified index.

**Example:**
```javascript
const str = "A";
console.log(str.charCodeAt(0)); // 65
```

---

## codePointAt()

**Definition:**
The `codePointAt()` method returns the Unicode code point of the character at the specified position. It correctly handles Unicode characters like emojis.

**Example:**
```javascript
const str = "😊";
console.log(str.codePointAt(0)); // 128522
```

---

## concat()

**Definition:**
The `concat()` method joins two or more strings and returns a new string. It does not modify the original string.

**Example:**
```javascript
const a = "Hello";
console.log(a.concat(" World")); // Hello World
```

---

## includes()

**Definition:**
The `includes()` method checks whether a string contains a specified value. It returns `true` or `false`.

**Example:**
```javascript
const str = "JavaScript";
console.log(str.includes("Script")); // true
```

---

## indexOf()

**Definition:**
The `indexOf()` method returns the index of the first occurrence of a specified value. If not found, it returns `-1`.

**Example:**
```javascript
const str = "banana";
console.log(str.indexOf("a")); // 1
```

---

## lastIndexOf()

**Definition:**
The `lastIndexOf()` method returns the index of the last occurrence of a specified value. If not found, it returns `-1`.

**Example:**
```javascript
const str = "banana";
console.log(str.lastIndexOf("a")); // 5
```

---

## startsWith()

**Definition:**
The `startsWith()` method checks whether a string begins with the specified text. It returns `true` or `false`.

**Example:**
```javascript
const str = "JavaScript";
console.log(str.startsWith("Java")); // true
```

---

## endsWith()

**Definition:**
The `endsWith()` method checks whether a string ends with the specified text. It returns `true` or `false`.

**Example:**
```javascript
const str = "JavaScript";
console.log(str.endsWith("Script")); // true
```

---

## search()

**Definition:**
The `search()` method searches a string for a pattern or regular expression. It returns the index of the first match.

**Example:**
```javascript
const str = "Hello World";
console.log(str.search("World")); // 6
```

---

## match()

**Definition:**
The `match()` method returns the result of matching a string against a regular expression. It returns an array or `null`.

**Example:**
```javascript
const str = "abc123";
console.log(str.match(/\d+/)); // ["123"]
```

---

## matchAll()

**Definition:**
The `matchAll()` method returns an iterator containing all matches of a regular expression. It is useful for finding multiple matches.

**Example:**
```javascript
const str = "cat bat rat";
console.log([...str.matchAll(/at/g)]);
```

---

## slice()

**Definition:**
The `slice()` method extracts a part of a string and returns it as a new string. It supports negative indexes.

**Example:**
```javascript
const str = "JavaScript";
console.log(str.slice(4, 10)); // Script
```

---

## substring()

**Definition:**
The `substring()` method returns the part of a string between two indexes. Negative values are treated as `0`.

**Example:**
```javascript
const str = "JavaScript";
console.log(str.substring(4, 10)); // Script
```

---

## substr() *(Deprecated)*

**Definition:**
The `substr()` method returns characters starting from a given index for a specified length. It is deprecated and should be avoided.

**Example:**
```javascript
const str = "JavaScript";
console.log(str.substr(4, 6)); // Script
```

---

## replace()

**Definition:**
The `replace()` method replaces the first occurrence of a specified value with another value. It returns a new string.

**Example:**
```javascript
const str = "Hello World";
console.log(str.replace("World", "JS")); // Hello JS
```

---

## replaceAll()

**Definition:**
The `replaceAll()` method replaces all occurrences of a specified value. It returns a new string.

**Example:**
```javascript
const str = "cat cat cat";
console.log(str.replaceAll("cat", "dog")); // dog dog dog
```

---

## repeat()

**Definition:**
The `repeat()` method creates a new string by repeating the original string a specified number of times.

**Example:**
```javascript
console.log("Hi ".repeat(3)); // Hi Hi Hi
```

---

## padStart()

**Definition:**
The `padStart()` method pads the beginning of a string until it reaches the desired length.

**Example:**
```javascript
console.log("5".padStart(3, "0")); // 005
```

---

## padEnd()

**Definition:**
The `padEnd()` method pads the end of a string until it reaches the desired length.

**Example:**
```javascript
console.log("5".padEnd(3, "0")); // 500
```

---

## trim()

**Definition:**
The `trim()` method removes whitespace from both the beginning and end of a string.

**Example:**
```javascript
console.log("  Hello  ".trim()); // Hello
```

---

## trimStart()

**Definition:**
The `trimStart()` method removes whitespace only from the beginning of a string.

**Example:**
```javascript
console.log("   Hello".trimStart()); // Hello
```

---

## trimEnd()

**Definition:**
The `trimEnd()` method removes whitespace only from the end of a string.

**Example:**
```javascript
console.log("Hello   ".trimEnd()); // Hello
```

---

## toLowerCase()

**Definition:**
The `toLowerCase()` method converts all characters in a string to lowercase.

**Example:**
```javascript
console.log("HELLO".toLowerCase()); // hello
```

---

## toUpperCase()

**Definition:**
The `toUpperCase()` method converts all characters in a string to uppercase.

**Example:**
```javascript
console.log("hello".toUpperCase()); // HELLO
```

---

## toLocaleLowerCase()

**Definition:**
The `toLocaleLowerCase()` method converts a string to lowercase using locale-specific rules.

**Example:**
```javascript
console.log("HELLO".toLocaleLowerCase()); // hello
```

---

## toLocaleUpperCase()

**Definition:**
The `toLocaleUpperCase()` method converts a string to uppercase using locale-specific rules.

**Example:**
```javascript
console.log("hello".toLocaleUpperCase()); // HELLO
```

---

## split()

**Definition:**
The `split()` method divides a string into an array using a specified separator.

**Example:**
```javascript
const str = "HTML,CSS,JS";
console.log(str.split(",")); // ["HTML", "CSS", "JS"]
```

---

## normalize()

**Definition:**
The `normalize()` method returns the Unicode normalized form of a string. It helps compare visually identical Unicode characters.

**Example:**
```javascript
console.log("é".normalize());
```

---

## localeCompare()

**Definition:**
The `localeCompare()` method compares two strings according to the current locale. It returns `-1`, `0`, or `1`.

**Example:**
```javascript
console.log("apple".localeCompare("banana")); // -1
```

---

## toString()

**Definition:**
The `toString()` method returns the string representation of a String object.

**Example:**
```javascript
const str = new String("Hello");
console.log(str.toString()); // Hello
```

---

## valueOf()

**Definition:**
The `valueOf()` method returns the primitive value of a String object.

**Example:**
```javascript
const str = new String("Hello");
console.log(str.valueOf()); // Hello
```

---

## [Symbol.iterator]

**Definition:**
The `[Symbol.iterator]()` method returns an iterator that allows you to loop through each character of a string.

**Example:**
```javascript
for (const ch of "JS") {
  console.log(ch);
}

// J
// S
```
node command invokes the Node.js runtime to execute a JavaScript file in a non-browser (server-side) environment.

