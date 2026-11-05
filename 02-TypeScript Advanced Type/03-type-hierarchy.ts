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


/*
Side Note: TypeScript Types

1. Top Types (any & unknown):
- Top types can accept values from almost all other types (like string, number, boolean, etc.).
- TypeScript has two important top types: any and unknown.

  * any:
    - any turns off TypeScript's type checking for a variable.
    - A variable with any can store any type of value.
    - We can access properties, call methods, and do anything without getting TypeScript errors.
    - However, using any removes TypeScript's safety. Use it only when really needed.

  * unknown:
    - unknown can also store any type of value, just like any.
    - Unlike any, it does not allow us to use properties or do operations without checking the type first.
    - We must use Type Narrowing (checking the exact type using typeof or if conditions) before working with an unknown value.
    - It is a safer alternative to any when we do not know the type in advance.

2. Core Types:
- Core types are the basic building blocks used to describe values and functions in everyday code.
- Some important core types include string, number, boolean, void, null, undefined, and never.
- All of these core types can be stored inside a Top Type (like unknown).

3. Nullish Types (null & undefined):
- null and undefined both mean that a value is missing or empty.
- null is used when we intentionally want to keep a variable empty (for example: currentUser = null).
- undefined means a variable has been created, but no value has been given to it yet.
- We can use Union types (like User | null) when a value might be present or empty.
- Before using a nullable value (like User | null), we also use Type Narrowing (e.g., if (user !== null)) to make sure it is not null or undefined.

4. Unit Type (void):
- A unit type is a type that has only one possible result or value.
- void is mainly used as a function return type when a function does not return any useful value (like just printing "Hlw World").
- If a function has no return statement, TypeScript automatically gives it a void return type.
- You cannot store the result of a void function inside a string or number variable.

5. Subtype of Unit Type (undefined vs void):
- void and undefined are closely related, but they are not the exact same thing.
- undefined is an actual JavaScript value and also a stricter subtype of void.
- A void function does not need a return statement at all.
- However, a function with an undefined return type means it specifically wants to return undefined.

6. Bottom Type (never):
- never is called the bottom type because it represents a value that will never happen.
- We mainly use never for functions that throw an error (like throw new Error()) or run forever in an infinite loop, because these functions never finish normally.
- No normal value (like a number or string) can ever be stored in a never variable.
- However, a never function can be assigned to any other type because the function stops (crashes with an error) before returning anything wrong.

Branching Rule in Hierarchy:
- Think of the type hierarchy like a tree: Top Types (any, unknown) are at the top, and Bottom Type (never) is at the bottom.
- In the middle, types like string, number, null, and void live on SEPARATE branches.
- We cannot assign a value from one branch to a different branch (for example: we cannot put null into void, or void into string).
- Only a subtype on the same branch can go into its parent type (for example: undefined is a subtype under the void branch, so undefined can be assigned to void).

Important Differences:
- any: Allows everything and turns off type checking (unsafe).
- unknown: Accepts any value, but forces us to check the type (Type Narrowing) before using it (safe).
- void: Means a function finishes normally, but does not return any useful value.
- undefined: Means a variable has not been given a value yet, or is a specific JavaScript value.
- null: Means a value was intentionally kept empty.
- never: Means a value cannot exist, or a function never finishes normally (such as when throwing an error).

Remember:
- Always prefer unknown over any when you do not know the type.
- Use Type Narrowing (if/typeof checks) when working with unknown or nullable types (like User | null).
- Different branches (like string, null, void) cannot be mixed directly without a Union (|).
- Use void for functions that do not return a useful value.
- Use null when you want to intentionally make a value empty.
- Use undefined when you specifically need that value.
- Use never when a function throws an error (throw new Error) or runs forever.
*/