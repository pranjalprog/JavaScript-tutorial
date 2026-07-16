const arr = [0 ,1 ,2 ,3 ,4 ,5 ,"pranjal" ,true] 

 /*mix bhi hota shkta hai datatype
 js array is resizable , means size change kar shakte hai dynamic time pe 
   js array is not associative arrays - can not be accesed using arbitary strings
   for eg console.log(arr[0]); is correct but console.log(arr[one]) is not 
   js array copy operation create shallow copies
  1. Shallow Copy - "A shallow copy copies only the first level of an object. Nested objects are copied by reference, not by value."
   
  eg - 
   const user = {
  name: "Pranjal",
  address: {
    city: "Jaipur"
  }
};

const copy = { ...user };

copy.name = "Aman";
copy.address.city = "Delhi";

console.log(user);

output - {
  name: "Pranjal",                            
  address: {
    city: "Delhi"
  }
}

user
 ├── name → "Pranjal"
 └── address ───────────┐
                        │
copy                    │
 ├── name → "Aman"      │
 └── address ───────────┘

2. Deep Copy - "A deep copy copies every level of an object, so changes in the copy do not affect the original."
eg - 
const user = {
  name: "Pranjal",
  address: {
    city: "Jaipur"
  }
};

const copy = structuredClone(user);

copy.address.city = "Delhi";

console.log(user.address.city); // Jaipur
console.log(copy.address.city); // Delhi

user
 ├── name → "Pranjal"
 └── address → { city: "Jaipur" }

copy
 ├── name → "Pranjal"
 └── address → { city: "Delhi" }
*/ 

const myHeros = ["pranjal" , " aman"]

const myArr = new Array(1,2,3,4,5)
console.log(myArr[0]);

// Array methods 

myArr.push(6)      // arr mai value add karta hai
myArr.pop()         // remove from last
myArr.unshift(9)  // 9 starting mai add ho jayega - not optimized
myArr.shift()       // remove from start 

console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join()  //add all the element of arr into a string 
console.log(myArr);
console.log(newArr);


//slice , splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr)


const myn2 = myArr.slice(1 , 3)
console.log(myn2);
 




/*// ==========================================================
// Array Methods
// ==========================================================

// new Array()
// Creates a new array.
// You can create an empty array, an array with a fixed length,
// or initialize it with values.

// push()
// Adds one or more elements to the end of an array.
// Modifies the original array.
// Returns the new length of the array.

// pop()
// Removes the last element from an array.
// Modifies the original array.
// Returns the removed element.

// unshift()
// Adds one or more elements to the beginning of an array.
// Existing elements shift one position to the right.
// Modifies the original array.

// shift()
// Removes the first element from an array.
// Remaining elements shift one position to the left.
// Modifies the original array.
// Returns the removed element.

// includes()
// Checks whether the array contains a specified element.
// Returns true if found, otherwise false.

// indexOf()
// Returns the index of the first occurrence of an element.
// Returns -1 if the element is not found.

// join()
// Combines all elements of an array into a single string.
// By default, elements are separated by commas.
// You can also specify a custom separator.

// slice()
// Returns a shallow copy of a portion of an array.
// Does NOT modify the original array.
// Syntax:
// array.slice(startIndex, endIndex)
// startIndex is included.
// endIndex is excluded.

// splice()
// Adds, removes, or replaces elements in an array.
// Modifies the original array.
// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...)

// ==========================================================
// Difference Between slice() and splice()
// ==========================================================

// slice()
// ✔ Returns a new array.
// ✔ Does NOT modify the original array.
// ✔ Used to copy or extract a portion of an array.
// ✔ Uses (startIndex, endIndex).

eg - const arr1 = [1, 2, 3, 4, 5];

const result = arr1.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr1);   // [1, 2, 3, 4, 5] (Original array remains unchanged)



// splice()
// ✔ Modifies the original array.
// ✔ Used to add, remove, or replace elements.
// ✔ Returns the removed elements.
// ✔ Uses (startIndex, deleteCount, items...).

// Example 1: Remove elements
const arr2 = [1, 2, 3, 4, 5];

const removed = arr2.splice(1, 2);

console.log(removed); // [2, 3]
console.log(arr2);    // [1, 4, 5]

// Example 2: Add elements
const arr3 = [1, 2, 5];

arr3.splice(2, 0, 3, 4);

console.log(arr3); // [1, 2, 3, 4, 5]

// Example 3: Replace elements
const arr4 = [1, 2, 3, 4, 5];

arr4.splice(2, 2, 30, 40);

console.log(arr4); // [1, 2, 30, 40, 5] */