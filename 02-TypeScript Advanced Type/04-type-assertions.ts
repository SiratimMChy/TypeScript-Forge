// Type Assertion

// "as" Syntax

type Status = "pending" | "approved" | "reject";

const someStatus: string = "pending";
// Error: Argument of type 'string' is not assignable to parameter of type 'Status'.
// Because someStatus is declared as string, TypeScript cannot guarantee
// that its value belongs to the Status union type.

// const someStatus: "pending" = "pending";
// Alternative: Declare the variable with a specific literal type.

const showStatus = (status: Status) => {
    console.log("Your Application Status is " + status);
};

showStatus(someStatus as Status);
// Type Assertion: Tells TypeScript to treat someStatus as Status.
// It does not perform runtime validation or change the actual value.


// Non-Null Assertion

interface Config {
    port?: number;
}

const config: Config = {
    port: 3000
};

// const currentPort: number = config.port;
// Error: Type 'number | undefined' is not assignable to type 'number'.
// Because port is optional, TypeScript considers its value
// potentially undefined.

// const currentPort: number = config.port!;
// Non-Null Assertion: Tells TypeScript that config.port
// is not null or undefined.

const currentPort: number = config.port as number;
// Type Assertion: Tells TypeScript to treat config.port as a number.
// It does not check whether the actual value is undefined.


// Const Assertion

const configuration = {
    port: 8080,
    prefix: "/api/v2"
} as const;

// Inferred Type:
// {
//     readonly port: 8080;
//     readonly prefix: "/api/v2";
// }

// configuration.port = 5000;
// Error: Cannot assign to 'port' because it is a read-only property.

// configuration.prefix = "/api";
// Error: Cannot assign to 'prefix' because it is a read-only property.

/*
Side Note: Type Assertion

1. What is Type Assertion?
- Type Assertion allows us to tell TypeScript the specific type
  of a value when we have more information than TypeScript can infer.
- It helps TypeScript understand how we intend to use a value.
- It does not change the actual value or perform runtime type checking.
- Type Assertion only affects compile-time type checking.

2. "as" Syntax:
- The "as" keyword is used to perform Type Assertion.
- It tells TypeScript to treat a value as a specified type.
- It is useful when TypeScript cannot automatically determine
  the exact type required in a particular situation.
- It should only be used when we are confident that the value
  actually matches the asserted type.

Syntax:
value as Type;

3. When Should We Use Type Assertion?
- When TypeScript cannot infer the required type correctly.
- When working with DOM elements and external libraries.
- When we have additional information about a value
  that TypeScript cannot determine automatically.
- When a specific type needs to be provided and
  other safer approaches are not suitable.

4. Non-Null Assertion:
- The Non-Null Assertion Operator (!) tells TypeScript that
  a value is not null or undefined.
- It removes null and undefined from the type of an expression.
- It is commonly used with optional properties and values
  that may be absent according to their declared types.
- It does not check whether the value actually exists at runtime.
- Use it only when the value's existence is guaranteed.

Syntax:
value!

5. Const Assertion:
- Const Assertion is performed using the "as const" syntax.
- It tells TypeScript to preserve literal types instead of
  widening them to general types such as string or number.
- Object properties become readonly.
- Array literals become readonly tuples.
- It helps preserve exact values and prevents reassignment
  through the inferred TypeScript type.
- It is useful for configuration objects, fixed values,
  constant settings, and predefined collections.

Syntax:
value as const;

6. Key Differences:
- Type Assertion ("as") tells TypeScript to treat a value
  as a specified type.
- Non-Null Assertion (!) tells TypeScript that a value
  is not null or undefined.
- Const Assertion ("as const") preserves literal types
  and makes inferred properties readonly.
- None of these assertions performs runtime validation.
- They only affect TypeScript's compile-time type checking.

7. Important Considerations:
- Type Assertion does not convert a value into another type.
- Non-Null Assertion does not guarantee that a value exists.
- Const Assertion does not freeze an object at runtime.
- Incorrect assertions can hide potential type errors
  and cause unexpected runtime problems.

8. Best Practices for Type Assertion:
- Avoid Type Assertion whenever possible.
- Prefer proper type definitions, type inference,
  and type narrowing.
- Let TypeScript determine the type automatically
  whenever possible.
- Use Type Assertion only when it is necessary and
  there is no better way to express the required type.
- Do not use assertions just to suppress TypeScript errors.
- Always make sure the actual value matches the asserted type.

Remember:
- Prefer Type Safety over forcing a specific type.
- Avoid unnecessary Type Assertions.
- Use "as" when a specific type needs to be asserted.
- Use "!" only when you are certain a value is not null
  or undefined.
- Use "as const" to preserve literal types and readonly properties.
- Type Assertion should be a last resort, not a default approach.
*/