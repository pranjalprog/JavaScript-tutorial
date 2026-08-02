/*const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
} )

console.log(values);


const Mynums = [1,2,3,4,5,6,7,8,9,10]

 const newNums = mynums.filter( (nums) => {
    return num > 4 }
    )
 console.log(newNums);


map(), filter(), and reduce() are JavaScript array methods used to process arrays without modifying the original array.

| Method     | Use                                  | Returns      |
| ---------- | ------------------------------------ | ------------ |
| `map()`    | Transform each element               | New array    |
| `filter()` | Select elements based on a condition | New array    |
| `reduce()` | Combine all elements into one value  | Single value |


1. map() – Transform Data

Used when you want to change every element.

let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]

Use: Convert, modify, or format each item.

2. filter() – Select Data

Used when you want only elements that satisfy a condition.

let nums = [1, 2, 3, 4, 5];
let even = nums.filter(n => n % 2 === 0);

console.log(even); // [2, 4]

Use: Find even numbers, active users, expensive products, etc.

3. reduce() – Combine Data

Used to reduce an array to a single value.

let nums = [1, 2, 3, 4];
let sum = nums.reduce((total, n) => total + n, 0);

console.log(sum); // 10

Use: Calculate sum, average, maximum, object counts, etc.

Real-World Example
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 90 }
];

// Get names of students who passed
let result = students
  .filter(s => s.marks >= 50)
  .map(s => s.name);

console.log(result); // ["A", "C"]
Easy Way to Remember
map() → Change every item.
filter() → Keep only matching items.
reduce() → Combine everything into one result (sum, count, object, etc.).





Chaining means calling multiple methods one after another because each method returns a value that the next method can use.

Syntax
object.method1().method2().method3();
Example with Arrays
let nums = [1, 2, 3, 4, 5];

let result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);

console.log(result); // 60
How it works
filter() → Keeps even numbers → [2, 4]
map() → Multiplies each by 10 → [20, 40]
reduce() → Adds them → 60
Why use chaining?
Makes code shorter and cleaner.
Avoids creating unnecessary temporary variables.
Improves readability by showing the data flow step by step.
Without Chaining
let even = nums.filter(n => n % 2 === 0);
let multiplied = even.map(n => n * 10);
let result = multiplied.reduce((sum, n) => sum + n, 0);
With Chaining
let result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);

Easy definition:
Method chaining is the process of calling multiple methods in a single statement, where the output of one method becomes the input for the next.

*/