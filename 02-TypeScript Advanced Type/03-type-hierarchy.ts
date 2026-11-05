// Top Types

let x: any = "Hlw";
x = 123;
x.length;

let anything: unknown = "Hello";
// anything.length; // Error: unknown type must be checked before accessing its properties.


// Core Types

let anything2: unknown;
let nothing: void;

// let anything2: null; // Error: null is not assignable to void.
const num: number = 123;

anything2 = num;
anything2 = nothing;


// Nullish Types

interface User {
    name: string;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null;


// Unit Type

const greet = () => {
    console.log("Hlw World");
};

greet();

// const greetings: string = greet(); // Error: greet() returns void, not string.


// Subtype of Unit Type

// const anotherGreet = (): undefined => {
//     console.log("Hlw World");
//     // return undefined;
// };

const anotherGreet = (): undefined => {
    console.log("Hlw World");
    // return undefined;
};

anotherGreet();


// Bottom Type

const getError = (msg: string) => {
    throw new Error(msg);
};

// let neverHappening: never = 32; // Error: number is not assignable to never.

const y: string = getError("ABC");
// const y: number = getError("123"); // Also valid: never is assignable to every type.
