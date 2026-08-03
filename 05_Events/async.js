/*JavaScript

Synchronous
Single Threaded (Default)
Execution Context
Executes one line of code at a time.

Example:

console.log(1);
console.log(2);

Explanation:

Each operation waits for the previous one to complete before executing.

JavaScript Engine Components
Call Stack
Memory Heap





Blocking Code vs Non-Blocking Code
Blocking Code
Blocks the flow of the program.
The next line of code waits until the current operation is completed.
Example: Read File (Synchronous)


Execution Order:

Read the file completely.
Print file content.
Print "Program End".
Non-Blocking Code
Does not block execution.
Other code continues to execute while the operation runs in the background.
Example: Read File (Asynchronous)


Execution Order:

Start reading the file.
Print "Program End" immediately.
Print the file content when reading is complete.
Difference
| Blocking Code                       | Non-Blocking Code                       |
| ----------------------------------- | --------------------------------------- |
| Blocks the execution of the program | Does not block execution                |
| Executes tasks one after another    | Allows other tasks to run while waiting |
| Uses synchronous operations         | Uses asynchronous operations            |
| Example: `readFileSync()`           | Example: `readFile()`                   |

Key Point: JavaScript is single-threaded, but through asynchronous APIs (callbacks, Promises, async/await), it can perform non-blocking operations efficiently.




                           ┌─────────────────────────────── JS ENGINE ───────────────────────────────┐
                           │                                                  │                       │
                           │      Memory Heap                                 │     CALL STACK        │
                           │                                                  │                       │
                           │                                                  │   ┌──────────────┐    │
                           │                                                  │   │      fn      │    │
                           │                                                  │   ├──────────────┤    │
                           │                                                  │   │      fn      │    │
                           │                                                  │   ├──────────────┤    │
                           │                                                  │   │      fn      │    │
                           │                                                  │   ├──────────────┤    │
                           │                                                  │   │    Global    │    │
                           │                                                  │   └──────────────┘    │
                           └──────────────────────────────────────────────────┴───────────────────────┘
                                                      │
                                                      │ Call
                                                      ▼
                  ┌─────────────────────────────── WEB APIs ───────────────────────────────┐
                  │                                                                         │
                  │  DOM API                                                                │
                  │                                                                         │
                  │  setTimeout()                                                           │
                  │                                                                         │
                  │  setInterval()                                                          │
                  │                                                                         │
                  │  fetch() ────────────────┐                                              │
                  │                          │                                              │
                  │                          ▼                                              │
                  │                     ┌───────────┐                                       │
                  │                     │ Promise   │                                       │
                  │                     └─────┬─────┘                                       │
                  │                           │                                             │
                  │                           ▼                                             │
                  │                  ┌────────────────┐                                     │
                  │                  │ Microtask Queue│                                     │
                  │                  │  CB    CB      │                                     │
                  │                  └────────────────┘                                     │
                  │                                                                         │
                  │        Register Callback ───────────────────────────────┐               │
                  └─────────────────────────────────────────────────────────┼───────────────┘
                                                                            │
                                                                            ▼
                                           ┌────────────────────────────────────────┐
                                           │     Callback Queue (Task Queue)        │
                                           │                                        │
                                           │      CB          CB                    │
                                           └────────────────────────────────────────┘
                                                          │
                                                          ▼
                                                    Event Loop
                                                          │
                                                          │ (Adds callback to Call Stack
                                                          │  when Call Stack is empty)
                                                          ▼
                                                     CALL STACK






                                                     JavaScript Code
      │
      ▼
 Call Stack
      │
      ▼
 Web APIs
      │
      ├── setTimeout / setInterval / DOM Events ──► Callback Queue
      │
      └── fetch() / Promise.then() / catch() ─────► Microtask Queue
                                                     │
                                                     ▼
                                                Event Loop
                                                     │
                                                     ▼
                                                Call Stack\



                                                JavaScript Runtime Architecture
1. JS Engine

The JavaScript Engine consists of:

Memory Heap
Stores variables, objects, arrays, functions, etc.
Call Stack
Keeps track of function execution.
Executes one function at a time (LIFO - Last In, First Out).
2. Web APIs (Provided by Browser)

These are not part of the JavaScript engine.

Examples:

DOM API
setTimeout()
setInterval()
fetch()

When JavaScript encounters these APIs, it hands them over to the browser.

3. Callback Queue (Task Queue / Macrotask Queue)

Stores callbacks from APIs like:

setTimeout
setInterval
DOM Events

Example:

setTimeout(() => {
    console.log("Hello");
}, 1000);

After 1 second, the callback is placed in the Callback Queue.

4. Microtask Queue

Has higher priority than the Callback Queue.

Stores:

Promise .then()
.catch()
.finally()
queueMicrotask()

Example:

Promise.resolve().then(() => {
    console.log("Promise");
});

The callback is added to the Microtask Queue.

5. Event Loop

The Event Loop continuously checks:

Is the Call Stack empty?
If yes:
Execute all Microtasks first.
Then execute one Callback Queue task.
Repeat forever.



JavaScript Code
       │
       ▼
   Call Stack
       │
       ▼
Web APIs (setTimeout, fetch, DOM Events)
       │
       ├──────────────► Callback Queue (Macrotasks)
       │
       └──────────────► Microtask Queue (Promises)
                            │
                            ▼
                      Event Loop
                            │
                            ▼
                        Call Stack



                        console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

*/ 