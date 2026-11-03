//* type alias vs interface

//? Interface is generally connected to objects

//? type alias is more connected to literals, unions, tuples, primitives

// Type Alias vs Interface

// Interface is generally used to define object structures.
// Type Alias can represent objects, literals, unions, tuples, and primitives.

type ID = number;

// Error: Interface cannot directly define a primitive type.
// interface ID = number;

type Role = "admin" | "member";

// Error: Interface cannot directly define a union of literal values.
// interface Role = "admin" | "member";

interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = {
  name: "tcp",
  id: 123,
  role: "admin",
};


// Interface Extension

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felis catus",
  breed: "Persian",
};


// Type Intersection

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};


// Interface Declaration Merging

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = {
  id: 123,
  name: "ABC",
};


// Error: Duplicate identifier.
// type TEmployee = {
//   name: string;
// };

// type TEmployee = {
//   id: number;
// };



/*
Side Note: Type Alias vs Interface

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
*/