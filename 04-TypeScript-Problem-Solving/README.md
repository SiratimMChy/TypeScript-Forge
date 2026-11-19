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

**P9.ts**

Shape Area Calculator with Discriminated Unions

- Demonstrates TypeScript's Discriminated Union pattern using three shapes (`Circle`, `Rectangle`, and `Triangle`).
- Each shape defines a literal property `shape` as a discriminator (`"circle" | "rectangle" | "triangle"`).
- Uses `if-else` type narrowing to safely access shape-specific properties (`radius`, `width`, `height`, `base`) and compute area.

**P10.ts**

Bank Account Management with Encapsulation & Validation

- Demonstrates OOP Encapsulation using `BankAccount` class.
- Uses access modifiers:
  * `public readonly accountNumber`: read-only public property.
  * `public holderName`: publicly accessible property.
  * `private _balance`: strictly hidden from outside modification.
- Implements a getter `balance` to expose read access to the balance.
- Implements business logic methods `deposit()` and `withdraw()` with parameter validation and balance checks.

**P11.ts**

Discount Calculator with Literal Union Types

- Defines a `DiscountType` union type (`"PERCENTAGE" | "FLAT"`).
- Implements `applyDiscount()` calculating percentage-based or flat discount amounts using `if-else` branch logic.

**P12.ts**

User Access Checker with Interface & Literal Types

- Defines a `User` interface with `name`, `role` (`"admin" | "editor" | "viewer"`), and `isActive`.
- Implements `canEdit()` using boolean logic to check if a user is active and has appropriate editorial or administrative roles.

**P13.ts**

Calculate Average with Rest Parameters

- Implements `calculateAverage()` using TypeScript's rest parameter syntax (`...numbers: number[]`).
- Handles the empty parameter case safely returning `0`, and calculates the average using array `.reduce()`.

**P14.ts**

Safe Property Access with Optional Properties & Truthiness

- Defines a `UserProfile` interface with an optional nested `address` object (`city` and `country`).
- Implements `getUserCity()` using truthiness narrowing to safely extract `city` or fall back to `"City not provided"`.

**P15.ts**

Generic First Element Getter

- Implements a generic function `getFirstElement<T>()` that accepts an array of any type `T[]`.
- Safely handles empty arrays by returning `undefined`, otherwise returning the first element `T`.





