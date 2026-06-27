# JavaScript Interview Questions and Answers

## 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to create interactive web pages.

### Example

```javascript
console.log("Hello JavaScript");
```

---

## 2. What are the data types in JavaScript?

JavaScript has 8 data types:

* String
* Number
* Boolean
* Undefined
* Null
* BigInt
* Symbol
* Object

```javascript
let name = "John";
let age = 20;
let isAdmin = true;
```

---

## 3. What is the difference between `var`, `let`, and `const`?

| Keyword | Scope    | Reassign | Redeclare |
| ------- | -------- | -------- | --------- |
| var     | Function | Yes      | Yes       |
| let     | Block    | Yes      | No        |
| const   | Block    | No       | No        |

```javascript
let age = 20;
age = 25;
```

---

## 4. What is Hoisting?

Hoisting moves declarations to the top of their scope.

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

---

## 5. What is the Temporal Dead Zone?

The period between entering a scope and declaring a `let` or `const` variable.

```javascript
console.log(a);

let a = 10;
```

---

## 6. What is Scope?

Scope determines where variables can be accessed.

* Global Scope
* Function Scope
* Block Scope

```javascript
{
    let x = 10;
}
```

---

## 7. What is a Closure?

A closure allows a function to access variables from its outer function.

```javascript
function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
```

---

## 8. What is a Callback Function?

A function passed as an argument to another function.

```javascript
function greet(name, callback) {
    callback(name);
}
```

---

## 9. What is an IIFE?

Immediately Invoked Function Expression.

```javascript
(function () {
    console.log("Hello");
})();
```

---

## 10. What is Strict Mode?

Strict mode helps catch errors.

```javascript
"use strict";
```

---

## 11. What is the difference between `==` and `===`?

* `==` checks value.
* `===` checks value and type.

```javascript
5 == "5";   // true
5 === "5";  // false
```

---

## 12. What is a Promise?

A Promise represents a future value.

```javascript
let p = new Promise((resolve) => {
    resolve("Done");
});
```

---

## 13. What are Promise states?

* Pending
* Fulfilled
* Rejected

---

## 14. What is Async/Await?

Used to handle asynchronous code.

```javascript
async function getData() {
    return "Data";
}
```

---

## 15. What is the Event Loop?

The event loop handles asynchronous operations in JavaScript.

---

## 16. What is the Call Stack?

A stack that manages function execution.

---

## 17. What is the difference between Null and Undefined?

```javascript
let a;
let b = null;
```

* `undefined` → not assigned.
* `null` → intentionally empty.

---

## 18. What is NaN?

Represents an invalid number.

```javascript
Number("abc");
```

---

## 19. What is Type Coercion?

Automatic conversion of one data type to another.

```javascript
"5" + 2;
```

---

## 20. What is an Object?

Objects store key-value pairs.

```javascript
const user = {
    name: "John"
};
```

---

## 21. What is an Array?

A collection of values.

```javascript
const nums = [1, 2, 3];
```

---

## 22. What is Destructuring?

Extract values from arrays or objects.

```javascript
const { name } = user;
```

---

## 23. What is the Spread Operator?

```javascript
const arr = [...nums];
```

---

## 24. What is the Rest Operator?

```javascript
function sum(...nums) {}
```

---

## 25. What is Template Literal?

```javascript
const name = "John";

console.log(`Hello ${name}`);
```

---

## 26. What is Arrow Function?

```javascript
const add = (a, b) => a + b;
```

---

## 27. What is `this` keyword?

Refers to the current object.

```javascript
const user = {
    name: "John",
    show() {
        console.log(this.name);
    }
};
```

---

## 28. What is Event Bubbling?

Events propagate from child to parent.

---

## 29. What is Event Capturing?

Events propagate from parent to child.

---

## 30. What is DOM?

Document Object Model.

```javascript
document.getElementById("demo");
```

---

## 31. What is BOM?

Browser Object Model.

```javascript
window.alert("Hi");
```

---

## 32. What is Local Storage?

Stores data permanently.

```javascript
localStorage.setItem("name", "John");
```

---

## 33. What is Session Storage?

Stores data for one browser session.

---

## 34. What is JSON?

JavaScript Object Notation.

```javascript
JSON.stringify(user);
```

---

## 35. What is `map()`?

Creates a new array.

```javascript
arr.map(x => x * 2);
```

---

## 36. What is `filter()`?

Filters array elements.

```javascript
arr.filter(x => x > 5);
```

---

## 37. What is `reduce()`?

Reduces an array to one value.

```javascript
arr.reduce((a, b) => a + b);
```

---

## 38. What is `find()`?

Returns the first matching element.

---

## 39. What is `forEach()`?

Executes a function for each element.

---

## 40. What is a Higher-Order Function?

Functions that take or return functions.

---

## 41. What is Debouncing?

Delays function execution.

---

## 42. What is Throttling?

Limits function execution rate.

---

## 43. What is Prototypal Inheritance?

Objects inherit from other objects.

---

## 44. What is a Prototype?

Every object has a prototype.

---

## 45. What is Garbage Collection?

Automatic memory cleanup.

---

## 46. What is Shallow Copy?

Copies only the first level.

---

## 47. What is Deep Copy?

Copies nested objects completely.

---

## 48. What is Module?

Used to split code.

```javascript
export function add() {}
```

---

## 49. What is Exception Handling?

```javascript
try {
}
catch (error) {
}
```

---

## 50. What are the ES6 Features?

* let
* const
* Arrow functions
* Classes
* Promises
* Template literals
* Destructuring
* Modules
* Spread operator
* Rest operator

```javascript
const add = (a, b) => a + b;
```
