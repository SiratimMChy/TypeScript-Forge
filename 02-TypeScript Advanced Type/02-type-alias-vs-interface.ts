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
