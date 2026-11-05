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
