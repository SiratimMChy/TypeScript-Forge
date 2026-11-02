<h1 align="center">TypeScript Fundamentals</h1>

**01-primitive-types.ts**

JavaScript vs TypeScript

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

**02-arrays-and-tuples.ts**

Array, Tuple & Readonly Modifier

What is an Array?
An Array is used to store multiple values of the same type
in a single variable.

What is a Tuple?
A Tuple allows us to store a fixed number of values.
Each value can have a different type and a specific position.

What is the Readonly Modifier?
Readonly prevents us from changing the values of an Array
or Tuple after they are created.

Array Syntax:
- string[] and Array<string> both are used to create
  an Array of strings. Both work in the same way.

Important:
- Array can store multiple values of the same type.
- Tuple has a fixed structure and specific types for each position.
- Readonly allows us to read values but prevents modification.

**03-function-parameters.ts**

Optional & Default Parameters

What is an Optional Parameter?
- An optional parameter is not required when calling a function.
- We use ? after the parameter name to make it optional.
- Example: lastName?: string

What is a Default Parameter?
- A default parameter has a predefined value.
- If no argument is provided, the default value is used.
- We use = to assign a default value.
- Example: greeting = "Hlw"

Important:
- Optional parameters must come after required parameters.
- Default parameters are used when an argument is omitted or undefined.
- Optional parameters can be omitted when calling a function.

**04-rest-parameters.ts**

Rest Parameters

What is a Rest Parameter?
- A Rest Parameter allows a function to accept multiple arguments.
- We use ... before the parameter name.
- It collects all the arguments into an Array.

Rest Parameter with Array:
- We can use number[], string[], etc. to define the argument types.
- Example: (...numbers: number[])
- The number of arguments is flexible. We can pass as many
  arguments as needed.

Rest Parameter with Tuple:
- We can use a Tuple to define a fixed number of arguments.
- Each argument has a specific type and position.
- Example: (...args: [name: string, age: number, istrue: boolean])

Important:
- A function can have only one Rest Parameter.
- The Rest Parameter must be the last parameter.
- Rest Parameters are always collected into an Array.
- When using a Tuple, all required arguments must be provided
  in the correct order.
- If a required argument is missing or its type does not match,
  TypeScript will show an error.

Example:
- logUserAction("Tuha", 24); // Error: Missing the third argument.
- logUserAction("Tuha", 24, true); // Correct

**05-objects-types-interfaces.ts**

Object Type, Type Alias & Interface

What is an Object Type?
- An Object Type defines the structure of an object.
- It specifies property names and their data types.
- We can define it directly inside a variable.

What is a Type Alias?
- A Type Alias allows us to give a custom name to a type.
- We use the type keyword and = to create it.
- It can represent objects, primitive types, arrays,
  tuples, union types, and other types.
- It helps us reuse the same type in multiple places.

What is an Interface?
- An Interface defines the structure of an object.
- We use the interface keyword to create it.
- It is mainly used to describe object structures.
- Interfaces can be extended using the extends keyword.

Nested Object Type:
- We can use one Type Alias inside another Type Alias.
- This allows us to reuse an existing object structure.
- Example: address: Address

When to Use Type Alias and Interface?
- Use Type Alias for primitive types, union types,
  tuples, and other complex type definitions.
- Use Interface mainly for defining object structures.
- Use Interface when you want to extend object structures
  using the extends keyword.
- Both Type Alias and Interface can define object structures.
- For ordinary object structures, either one can be used.

Why Does This Error Occur?
- type UserName = string; // Correct
- interface IUserName = string; // Error

- Type Alias can create a new name for primitive types
  like string, number, and boolean.
- Interface cannot directly create aliases for primitive types.
- Interface is designed to describe object structures.

Important:
- We cannot access or add a property that is not defined
  in an object's type.
- If we try to do so, TypeScript will show an error.
- We can use ? to make a property optional.
- We can change an existing property's value if the new
  value matches its defined type.
- When an object contains another object as a property,
  we must follow the nested object's defined structure.
