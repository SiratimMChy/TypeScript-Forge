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

Type Hierarchy

1. What are Top Types?

- Top types are types that can accept any value.
- In TypeScript, any and unknown are top types.
- any turns off type checking, allowing you to perform any operation.
- unknown is type-safe; you must verify or narrow its type before accessing its properties.

2. What are Core Types?

- Core types represent the standard data types used in TypeScript.
- Examples include string, number, boolean, object, and function types.
- They form the central layer of TypeScript's type hierarchy.

3. What are Nullish Types?

- Nullish types represent the absence of values.
- null represents the intentional absence of any object value.
- undefined represents a variable that has been declared but not assigned a value.
- Often used in union types (e.g., User | null) to represent optional or empty states.

4. What are Unit Types?

- A Unit Type is a type that allows only one specific value.
- void is used when a function returns nothing.
- undefined is a subtype of unit types, representing the literal value undefined.

5. What is the Bottom Type?

- A Bottom Type is at the very bottom of the type hierarchy.
- In TypeScript, never is the bottom type.
- It represents a value that can never occur (e.g., functions that always throw an error or infinite loops).
- never is assignable to every type, but no type is assignable to never (except never itself).

Important:

- any disables TypeScript's safety features, while unknown enforces type checking before use.
- never is used for exhaustive type checks and values that cannot exist.
- void functions do not return a usable value, whereas undefined returns the literal undefined.
- Understanding type hierarchy helps in type narrowing and building robust type systems.
