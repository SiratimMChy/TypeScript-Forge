<h1 align="center">TypeScript Problem Solving</h1>

**P1.ts**

Optional Parameters & Multiplier Logic

- Demonstrates handling optional function parameters (`multiplier?: number`).
- Uses strict equality `multiplier !== undefined` to ensure that passing `0` as the multiplier works correctly and is not mistakenly treated as falsy.

**P2.ts**

Type Narrowing with Union Types

- Handles a union input type `string | number | boolean` and returns `string | number`.
- Uses `typeof` type guards to narrow down the specific type:
  * `number` -> multiplies by 10.
  * `string` -> trims and converts to lowercase.
  * `boolean` -> returns "Active" for `true` and "Inactive" for `false`.

**P3.ts**

Readonly Coordinate Tuple & Destructuring

- Uses a `readonly [number, number, string]` tuple to represent geographic coordinates with location names.
- The `readonly` modifier prevents mutation of coordinates after initialization.
- Demonstrates array/tuple destructuring into `[latitude, longitude, locationName]`.

**P4.ts**

Generic Rest Parameters for Array Concatenation

- Uses generic type parameter `<T>` with rest parameters `...arrays: T[][]`.
- Combines any number of arrays of the same type into a single flattened array using `.reduce()`.

**P5.ts**

Filtering Course Objects with Interfaces

- Defines a `Course` interface with `title`, `students`, and `isPublished`.
- Implements `getPopularCourses()` filtering an array of courses based on multiple criteria (`isPublished === true` and `students >= minStudents`).

**P6.ts**

Generic Key Plucking with `keyof` and Indexed Access

- Implements `pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][]`.
- Demonstrates TypeScript's type safety by ensuring `key` can only be a valid property name of `T` using `K extends keyof T`.
- Returns an array typed strictly as `T[K][]`.

**P7.ts**

OOP Inheritance & Access Modifiers

- Demonstrates class inheritance where `Manager` extends `Employee`.
- Highlights access modifiers:
  * `protected name`: accessible inside `Employee` and derived classes like `Manager`.
  * `private baseSalary`: encapsulated within `Employee`.
  * `private department`: exclusive to `Manager`.
- Calls `super(name, baseSalary)` inside the child constructor to initialize parent properties.

**P8.ts**

Asynchronous Age Validation with Promises

- Demonstrates creating and consuming a `Promise<string>` with asynchronous operations (`setTimeout`).
- Handles success via `resolve()` and failure via `reject(new Error(...))`.
- Demonstrates promise handling using `.then() / .catch()` chains as well as top-level `await`.
