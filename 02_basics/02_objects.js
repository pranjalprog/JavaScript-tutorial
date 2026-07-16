/* object ko declare karne ke two tareeke hai 
1.as a literal  - isme singleton nahi banta hai
2.ad a constructor  - Object.create 
concept - singleton => agr constructor se banaya toh singleton object banega .
*/
// object literals 


const mySym = Symbol("Key1") 

const JsUser = {
    name : "pranjal",
    "full Name" : "pranjal jain",
    age : 20,
    [mySym] : "myKey1",
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    LastLofinDays : ["Monday", "tuesday"]
}
/*
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full Name"])
console.log(JsUser[mySym])

JsUser.email = "pranjal@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "pranjal@micro.com"
console.log(JsUser);
*/
JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greeting2 = function(){
    console.log(`hello Js User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
] 

/*What is Destructuring in JavaScript?

Definition:
Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects and store them into separate variables in a simple and readable way.

1. Object Destructuring
Without Destructuring
const user = {
  name: "Pranjal",
  age: 20,
  city: "Jaipur"
};

const name = user.name;
const age = user.age;

console.log(name);
console.log(age);
With Destructuring
const user = {
  name: "Pranjal",
  age: 20,
  city: "Jaipur"
};

const { name, age } = user;

console.log(name); // Pranjal
console.log(age);  // 20
2. Rename Variables

You can rename variables while destructuring.

const user = {
  name: "Pranjal",
  age: 20
};

const { name: userName, age: userAge } = user;

console.log(userName); // Pranjal
console.log(userAge);  // 20
3. Default Values

If a property doesn't exist, you can provide a default value.

const user = {
  name: "Pranjal"
};

const { name, city = "Delhi" } = user;

console.log(name); // Pranjal
console.log(city); // Delhi
4. Array Destructuring
Without Destructuring
const colors = ["Red", "Green", "Blue"];

const first = colors[0];
const second = colors[1];

console.log(first);
console.log(second);
With Destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);  // Red
console.log(second); // Green
5. Skip Values
const numbers = [10, 20, 30, 40];

const [a, , c] = numbers;

console.log(a); // 10
console.log(c); // 30
6. Rest Operator (...)
const numbers = [10, 20, 30, 40, 50];

const [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]
7. Nested Object Destructuring
const user = {
  name: "Pranjal",
  address: {
    city: "Jaipur",
    state: "Rajasthan"
  }
};

const {
  address: { city }
} = user;

console.log(city); // Jaipur
8. Nested Array Destructuring
const arr = [1, [2, 3], 4];

const [a, [b, c], d] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
Real-life Example

Suppose an API returns:

const user = {
  id: 1,
  name: "Pranjal",
  email: "pranjal@gmail.com",
  age: 20
};

Instead of writing:

const name = user.name;
const email = user.email;

You can write:

const { name, email } = user;

console.log(name);
console.log(email);
Why use Destructuring?
Makes code shorter and cleaner.
Easier to read.
Avoids repeatedly writing object.property.
Commonly used with API responses, React props, and function parameters.
Easy way to remember

Object Destructuring (uses {})

const { name, age } = user;

Think: "Take properties from an object."

Array Destructuring (uses [])

const [first, second] = colors;

Think: "Take values from an array by position."*/



/*What is JSON?

Definition:
JSON (JavaScript Object Notation) is a lightweight text format used to store and exchange data between a client and a server. It is easy for humans to read and easy for machines to parse.

Example
{
  "name": "Pranjal",
  "age": 20,
  "isStudent": true
}
Features of JSON
Stores data in key-value pairs.
Lightweight and easy to read.
Language-independent (works with JavaScript, Python, Java, C#, etc.).
Commonly used in web applications and APIs.
What is an API?

Definition:
API (Application Programming Interface) is a set of rules that allows two applications to communicate and exchange data.

Real-life Example

Think of a restaurant:

You → Client
Waiter → API
Kitchen → Server

You give your order to the waiter (API), the waiter takes it to the kitchen (server), and brings your food (data) back to you.

Client  →  API  →  Server
Client  ←  API  ←  Server
What is a JSON API?

Definition:
A JSON API is an API that sends and receives data in JSON format.

When a client requests data, the server responds with JSON.

Example Request
GET /users/1
JSON Response
{
  "id": 1,
  "name": "Pranjal",
  "email": "pranjal@gmail.com"
}
How JSON API Works
Browser / App
      │
      │ Request
      ▼
      API
      │
      ▼
Server / Database
      │
      │ JSON Response
      ▼
Browser / App
Example in JavaScript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data));

Output:

{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz"
}
Why do we use JSON APIs?
Exchange data between client and server.
Fetch data from databases.
Build web and mobile applications.
Connect different software systems.
Common HTTP Methods Used with APIs
Method	Purpose
GET	Retrieve data
POST	Create new data
PUT	Update existing data
PATCH	Partially update data
DELETE	Remove data
Popular Public JSON APIs
JSONPlaceholder – Fake REST API for practice.
GitHub API – GitHub user and repository data.
OpenWeather API – Weather information.
REST Countries API – Country details.
Difference Between JSON and API
JSON	API
A data format.	A way for applications to communicate.
Stores data in key-value pairs.	Sends and receives data.
Used inside API responses.	Can return data in JSON, XML, or other formats.
Easy way to remember
JSON = The language in which data is written.
API = The messenger that carries the data.

Example:

You request user details using an API.
The server sends the user details back in JSON format.*/