//*object type , type alias and interface
type Address = {
  streetName: string;
  holdingNumber: number;
};
type User = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address;
};

const user: {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
} = {
  name: "Tuha",
  age: 24,
  isActive: true,
  action: () => console.log("Hlw"),
  badges: ["abc", "hero"],
};

const user1: User = {
  name: "Tuha",
  age: 24,
  isActive: true,
  action: () => console.log("Hlw"),
  badges: ["abc", "hero"],
  address: {
    streetName: "Sylhet",
    holdingNumber: 67,
  },
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}


// Type Alias can represent primitive types.
type UserName = string;

// Interface defines object structures.
interface IUserName {
  name: string;
}

/*
Side Note: Object Type, Type Alias & Interface

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
*/