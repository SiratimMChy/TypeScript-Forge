let str : string = "string";
let num: number = 50;
let isValid: boolean = true;
let bigInt: bigint = 100n;
let symbol: symbol = Symbol();

const addTwo = (a: number, b: number) => {
  return a + b;
};

console.log(addTwo(245,25));


/*
Side Note: JavaScript vs TypeScript

JavaScript is a dynamically typed language, whereas TypeScript is a statically typed superset of JavaScript.

JavaScript determines variable types at runtime, while TypeScript checks types during development.
TypeScript helps catch type-related errors early and makes code easier to maintain.
A superset means TypeScript includes all JavaScript features and adds extra features like static typing.

Why use TypeScript instead of JavaScript?

1. Type Safety: Helps prevent mistakes by checking whether a value has the correct type.
2. Static Type Checking: Checks types before the code runs.
3. Type Inference: Automatically determines a variable's type based on its assigned value, without requiring explicit type annotations.
4. Better Autocomplete: Provides smarter suggestions and improves the coding experience.
5. Early Error Detection:   Helps find mistakes while writing code, before running the program.
6. Maintainability: Makes code easier to read, understand, and update by clearly defining the types of variables and functions.
7. Better Refactoring: Helps find potential errors when changing variable types, function parameters, or other parts of the code.

Important:

TypeScript does not replace JavaScript. It is built on JavaScript
and adds extra features like static typing and type checking.

JavaScript is dynamically typed, while TypeScript provides
static type checking during development to help catch errors early.

TypeScript code is converted into JavaScript before execution.
You can also use JavaScript features in TypeScript.
*/
