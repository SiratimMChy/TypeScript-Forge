<h1 align="center">TypeScript Advanced Type</h1>

**01-union-and-literal-types.ts**

Literal Types & Union Types

1. What is a Literal Type?

- A Literal Type restricts a variable to one specific value.
- Unlike general types such as string or number, it only
  accepts the exact value defined.
- Example: type Status = "pending";
- Only "pending" can be assigned to this type.

2. What is a Basic Union Type?

- A Union Type allows a variable to accept values of
  multiple types.
- We use the | (pipe) symbol to combine different types.
- Example: type Identity = string | number;
- The variable can accept either a string or a number.

3. What is a Literal Union Type?

- A Literal Union Type allows a variable to accept only
  a predefined set of values.
- We combine multiple literal values using the | symbol.
- Example: type Role = "user" | "admin";
- Only "user" or "admin" can be assigned.
- It is useful when a variable must have one value
  from a fixed set of options.

4. What is an Object Union Type?

- An Object Union Type allows a variable to accept one
  of multiple object structures.
- Each object type can have different properties.
- We use the | symbol to combine multiple object types.
- Example: type User = Admin | Member;

Important:

- A value must match at least one type in a Union Type.
- An object must satisfy all required properties of at least
  one object type in the union.
- Required properties cannot be omitted.
- A property that belongs to one object type is not
  automatically required in another object type.
- Literal Types only accept their predefined values.
- TypeScript shows an error if a value does not match
  the defined type or object structure.

**02-type-alias-vs-interface.ts**

Type Alias vs Interface

1. What is a Type Alias?

- A Type Alias allows us to create a custom name for an existing type.
- It makes complex type definitions easier to read, manage, and reuse.
- It can represent primitive types, literal types, union types,
  intersection types, tuples, arrays, and object structures.
- It is useful when we need flexibility in defining and combining
  different kinds of types.

2. What is an Interface?

- An Interface defines the structure or shape of an object.
- It describes which properties an object should have
  and what data types those properties should follow.
- It helps maintain consistency when multiple objects
  share the same structure.
- It is especially useful for defining object structures
  in large applications.

3. When Should We Use Type Alias?

- Use Type Alias when defining primitive types such as
  string, number, and boolean.
- Use it when creating literal types and union types.
- Use it when defining tuples or combining multiple types
  using the & (intersection) operator.
- Use it when working with complex type combinations.
- It is a flexible choice when a type definition involves
  more than just an object structure.

4. When Should We Use Interface?

- Use Interface mainly when defining the structure of objects.
- Use it when multiple objects share common properties.
- Use it when extending an existing object structure
  using the extends keyword.
- Use it when you need to extend an Interface through
  Declaration Merging.
- It is a good choice for defining reusable object structures
  in application development.

5. Declaration Merging:

- Interface supports Declaration Merging.
- It allows multiple Interfaces with the same name
  to be combined into a single Interface.
- Their properties are automatically merged.
- Type Alias does not support Declaration Merging.
- Declaring the same Type Alias multiple times in the
  same scope causes a duplicate identifier error.

6. Extension and Intersection:

- Interface uses the extends keyword to inherit properties
  from another Interface.
- Type Alias uses the & (intersection) operator to combine
  multiple types into a single type.
- Both approaches can be used to combine object structures.
- The resulting type must satisfy all required properties
  of the combined structures.

7. Key Differences:

- Type Alias can represent primitive, literal, union,
  tuple, array, and object types.
- Interface is mainly designed to describe object structures.
- Both Type Alias and Interface can define object types.
- Type Alias supports union and intersection types.
- Interface supports extension and declaration merging.
- Type Alias cannot be re-declared with the same name
  in the same scope.
- Interface can be re-declared and its properties
  are automatically merged.

8. Which One Should We Choose?

- Choose Type Alias when working with primitive types,
  unions, tuples, or complex type combinations.
- Choose Interface when defining object structures
  that may need extension or declaration merging.
- For simple object structures, either one is acceptable.
- There is no universal rule that one is always better
  than the other.
- The choice depends on the requirements and structure
  of the application.

Remember:

- Type Alias provides flexibility for defining different types.
- Interface provides a clear way to describe object structures.
- Both help make TypeScript code more organized,
  reusable, and maintainable.


**03-type-hierarchy.ts**

TypeScript Types

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


**04-type-assertions.ts**

Type Assertion

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


**05-type-narrowing.ts**

Type Narrowing in TypeScript

1. typeof Operator:

- typeof is a JavaScript operator that returns the type of a value
  as a string at runtime.
- It is commonly used to check whether a value is a string,
  number, boolean, undefined, bigint, symbol, function, or object.
- In TypeScript, typeof can also be used for type checking
  and narrowing within conditional statements.

2. Type Guard:

- A Type Guard is a condition or check that helps TypeScript
  identify the specific type of a value.
- It is useful when a variable can hold more than one type,
  such as a Union Type.
- typeof is one of the common ways to create a Type Guard.
- After checking the type, TypeScript allows us to safely
  use properties and methods available on that specific type.
- This process is called Type Narrowing.

3. Type Narrowing:

- Type Narrowing means reducing a variable's possible types
  based on conditions or checks.
- For example, if a variable has the type string | number,
  checking typeof value === "string" narrows its type to string
  inside that block.
- In the other branch, TypeScript can narrow it to number.
- Type Narrowing helps us work with different types safely
  without unnecessary type assertions.

4. Truthiness Narrowing:

- Truthiness Narrowing uses conditions to check whether
  a value is truthy or falsy.
- In JavaScript, common falsy values include:
  false, 0, -0, 0n, "", null, undefined, and NaN.
- When checking an object that may be null or undefined,
  a truthiness check can help narrow its type.
- For example, user && user.address checks that both user
  and user.address are truthy before accessing the street property.
- This helps prevent errors caused by accessing properties
  on null or undefined values.
- Be careful when using truthiness checks if values like
  0, false, or "" are valid values in your application.

5. Optional Properties:

- The ? symbol makes an object property optional.
- An optional property may be absent or have the value undefined.
- For example, address?: { street: string } means that
  the address property is not required.
- We should check whether an optional property exists
  before accessing its nested properties.
- An optional property does not automatically allow null
  unless null is explicitly included in its type.

6. Type Alias and Interface:

- Both Type Alias and Interface can describe object structures.
- Type Alias can also represent union types, primitive types,
  tuples, and other type combinations.
- Interface is commonly used to define reusable object structures.
- A Type Alias can combine an object type with null
  using a Union Type.
- Both can be used to define the structure of objects.

7. Common Type Narrowing Techniques:

- typeof: Checks primitive types such as string and number.
- instanceof: Checks whether an object belongs to a specific class.
- in: Checks whether a property exists in an object.
- Truthiness Check: Checks whether a value is truthy or falsy.
- Equality Check: Compares values to narrow down possible types.
- Custom Type Guard: Uses a function to determine a specific type.

Remember:

- typeof checks the runtime type of a value.
- A Type Guard helps TypeScript narrow down possible types.
- Type Narrowing makes it safer to work with Union Types.
- Truthiness checks help handle nullish and optional values.
- Optional properties may be undefined.
- Use appropriate checks before accessing potentially
  unavailable properties or values.

**06-narrowing-continued.ts**

Advanced Type Guards in TypeScript

1. Equality Narrowing:

- Equality Narrowing uses equality operators to narrow down
  the possible types of a variable.
- Common operators include ===, !==, ==, and !=.
- When two variables are compared using strict equality,
  TypeScript can identify their common possible types.
- It is useful when working with multiple Union Types.
- Strict equality (=== and !==) is generally preferred
  because it does not perform type coercion.

2. Inequality Narrowing:

- Inequality Narrowing uses comparison conditions
  to eliminate specific types from a Union Type.
- The !== operator checks whether two values are different.
- For example, x !== null removes null from
  the possible types of x within the condition.
- It is useful when handling null and undefined values.

3. "in" Operator:

- The in operator checks whether a property exists
  in an object.
- It is commonly used to distinguish between
  different object types in a Union Type.
- TypeScript uses the property check to narrow down
  the possible object types.
- It is useful when different object types have
  different property names.
- The in operator can also check inherited properties.
- Optional properties may exist in multiple types,
  so they may not always narrow to a single type.

Syntax:
"propertyName" in object;

4. instanceof Operator:

- instanceof is a JavaScript operator used to check
  whether an object belongs to a particular class
  or constructor's prototype chain.
- TypeScript also uses instanceof as a Type Guard.
- It helps narrow down object types at runtime.
- It is useful when working with built-in objects
  such as Date, Error, and custom classes.
- It is generally not suitable for distinguishing
  ordinary object types based only on their structure.

Syntax:
value instanceof ClassName;

5. Discriminated Union:

- A Discriminated Union is a pattern used with Union Types
  to distinguish between multiple object types.
- Each object type contains a common property
  with a different literal value.
- This common property is called a Discriminant Property.
- TypeScript checks the discriminant property
  to identify the specific object type.
- It is useful when working with different object structures
  that share a common purpose.

Example:

- Circle and Square are two different object types.
- Both contain a common property named kind.
- Circle has the literal value "circle".
- Square has the literal value "square".
- Checking shape.kind allows TypeScript to identify
  the correct object type.

6. Literal Types:

- A Literal Type represents an exact value
  instead of a general type.
- For example, "circle" is a string literal type.
- A variable with the type "circle" can only contain
  the exact value "circle".
- Literal Types are commonly used in Discriminated Unions.
- They help TypeScript distinguish between
  different object types.

7. Common Caveats of Type Guards:

- typeof null returns "object" because of
  a historical JavaScript behavior.
- typeof an array also returns "object".
- Therefore, typeof alone cannot distinguish
  arrays from regular objects.
- Array.isArray() should be used when explicitly
  checking whether a value is an array.
- instanceof checks an object's prototype chain,
  so it may not work reliably across different
  JavaScript execution environments.
- The in operator checks whether a property exists,
  but does not guarantee that its value is valid.
- Equality checks should be used carefully
  when multiple types have overlapping values.

8. Best Practices:

- Use typeof for checking primitive types.
- Use strict equality for comparing values.
- Use the in operator to check object properties.
- Use instanceof for identifying class instances.
- Use Discriminated Unions when working with
  multiple related object types.
- Prefer clear and explicit conditions
  when narrowing complex Union Types.
- Avoid unnecessary Type Assertions when
  Type Guards can provide type safety.

Remember:

- Equality Narrowing uses comparison operators.
- Inequality Narrowing eliminates specific possible types.
- The in operator checks whether a property exists.
- instanceof checks an object's prototype chain.
- Discriminated Unions use a common literal property
  to identify specific object types.
- Type Guards help make TypeScript code safer
  when working with Union Types.


**07-generic.ts**

Generics in TypeScript

1. What are Generics?

- Generics allow us to create reusable functions, interfaces,
  and type definitions that work with different data types.
- They help us write flexible code without losing type safety.
- Instead of fixing a data type in advance, we use a
  type parameter that is determined when the generic is used.
- This allows the same code to work with strings, numbers,
  objects, and other types while preserving their actual types.

2. Generic Type Parameter:

- A generic type parameter is a placeholder for a data type.
- It is commonly represented by T.
- The actual type is determined when we use the generic.
- Common naming conventions include:
  T = Type
  U = Another Type
  K = Key
  V = Value
- These are naming conventions, not reserved keywords.

3. Generic Functions:

- A generic function uses a type parameter to accept
  different types of input values.
- The type parameter is declared inside angle brackets <>.
- It allows a function to work with different types
  without using any.
- TypeScript preserves the relationship between the
  input type and the return type.
- This means the returned value retains the specific
  type of the input instead of losing its type information.

4. Type Inference:

- TypeScript can automatically determine the actual
  type of a generic parameter from the provided argument.
- This process is called Type Inference.
- We do not always need to specify the type manually.
- The inferred type is used throughout the generic function
  and its return value.

5. Generic Interfaces:

- A generic interface uses a type parameter to define
  a reusable structure for different data types.
- The type parameter is declared after the interface name.
- The actual data type is supplied when using the interface.
- This allows the same interface structure to be reused
  with different types of data.

6. Generics with API Responses:

- API responses often share common properties such as
  data, success, and statusCode.
- However, the structure of the data property can differ
  depending on the API response.
- A generic interface allows us to define the common
  response structure only once.
- The T parameter represents the data type of the response.
- We can reuse the same interface for user, blog,
  product, or other response data.
- This avoids creating separate interfaces for the
  same response structure.

7. Generics vs any:

- any allows different types of values but disables
  TypeScript's type checking.
- Generics allow different types while preserving
  their specific type information.
- With generics, TypeScript can detect invalid operations
  based on the actual data type.
- Therefore, prefer generics over any when a reusable
  function or structure needs to preserve type safety.

Remember:

- Generics make functions and interfaces reusable.
- T is a placeholder, not a fixed data type.
- TypeScript can infer the actual type automatically.
- Generic functions preserve the relationship between
  input and output types.
- Generic interfaces allow the same structure to work
  with different data types.
- Prefer generics over any to maintain type safety.


**08-generic-with-promise.ts**

Applying Generic Type to Handle Promise

1. Generic API Response Wrapper (apiResponse<T>):

- In real-world projects, backend APIs usually follow a standard structure (like success, statusCode, message, and data).
- The actual 'data' changes depending on the endpoint (sometimes it is a User, sometimes a Product[], etc.).
- By using a Generic <T> for the 'data' property (interface apiResponse<T>), we can reuse this single interface for every API response in our app (e.g., apiResponse<User>).

2. Why is the return type Promise<User | undefined>?

- Every 'async' function automatically returns a Promise.
- Inside the 'try' block, if everything succeeds, the function returns 'data.data' which is of type 'User'.
- However, if an error occurs and execution jumps to the 'catch' block, we only log the error with console.error() and do NOT return anything.
- In JavaScript/TypeScript, a function path that finishes without returning a value automatically returns 'undefined'.
- Therefore, the Promise can resolve to either 'User' (on success) or 'undefined' (on error), making the return type 'Promise<User | undefined>'.

3. Type Assertion on JSON Data (as apiResponse<User>):

- By default, 'await res.json()' returns 'any' because TypeScript does not know what the external server will send at runtime.
- Using 'as apiResponse<User>' tells TypeScript to treat the parsed JSON according to our structured generic interface.

4. Narrowing the 'catch' Error (error instanceof Error):

- In TypeScript, the 'error' variable inside a catch block is treated as 'unknown' (or 'any') because anything can be thrown in JavaScript (not just Error objects).
- Using 'if (error instanceof Error)' narrows the type down to a real Error object, allowing us to safely access 'error.message'.

5. Narrowing the Final Result (if (userData)):

- Since 'userData' has the type 'User | undefined', TypeScript will not let us access 'userData.name' directly.
- Using a Truthiness check 'if (userData)' removes 'undefined' and confirms that 'userData' is a valid 'User' object.

Important Differences:

- apiResponse<T> : Describes the structure of the JSON body coming from the server.
- Promise<User | undefined>: Describes what the async function itself will eventually return.
- error instanceof Error : Checks if the caught error is a standard JavaScript Error class instance.
- if (userData) : Checks that the returned data is not undefined before using its properties.

Remember:

- Always wrap async function return types inside Promise<...>.
- If a catch block does not re-throw an error or return a fallback value, always include '| undefined' in your Promise return type.
- Use 'instanceof Error' inside catch blocks before accessing '.message'.
- Narrow down 'User | undefined' using an 'if' check before accessing object properties like 'userData.name'.
