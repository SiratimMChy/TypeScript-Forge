//  Rest Parameters (..arrays)
const sum = (...numbers: number[]) => {
  return numbers.reduce((total, cur) => total + cur, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6));

const logUserAction = (...args: [name: string, age: number, istrue: boolean]) => {
  const [name, age, istrue] = args;
  console.log(name + " is " + age + ", Active: " + istrue);
};

logUserAction("Tuha", 24, true);

/*
Side Note: Rest Parameters

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
*/