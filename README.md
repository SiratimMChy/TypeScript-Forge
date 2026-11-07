<h1 align="center">TypeScript-Forge</h1>

## Overview

A collection of TypeScript code and notes, covering everything from the basics to more advanced concepts and object-oriented programming.

### TypeScript Fundamentals

Covers core TypeScript concepts including primitive types, arrays, tuples, functions, objects, and interfaces. Detailed topic notes and examples are available in [README.md](./01-TypeScript%20Fundamentals/README.md).

#### Topics Covered

- `01-primitive-types.ts` — Primitive types, static type checking, type inference, and JavaScript vs TypeScript
- `02-arrays-and-tuples.ts` — Arrays, tuples, and the `readonly` modifier
- `03-function-parameters.ts` — Optional and default parameters
- `04-rest-parameters.ts` — Rest parameters with arrays and tuples
- `05-objects-types-interfaces.ts` — Object types, type aliases, and interfaces

### TypeScript Advanced Type

Covers advanced type mechanics including literal types, union types, type aliases, interfaces, type hierarchy, type assertions, type narrowing, generics, and generic promises. Detailed topic notes and examples are available in [README.md](./02-TypeScript%20Advanced%20Type/README.md).

#### Topics Covered

- `01-union-and-literal-types.ts` — Literal types, basic union types, literal union types, and object union types
- `02-type-alias-vs-interface.ts` — Type alias vs interface, declaration merging, extension vs intersection, and best practices
- `03-type-hierarchy.ts` — Type hierarchy: top types (`any`, `unknown`), core types, nullish types, unit types (`void`, `undefined`), and bottom types (`never`)
- `04-type-assertions.ts` — Type assertions (`as`), non-null assertions (`!`), const assertions (`as const`), and best practices
- `05-type-narrowing.ts` — Type narrowing, `typeof` type guards, truthiness checks, and optional properties
- `06-narrowing-continued.ts` — Advanced type guards: equality, inequality, `in` operator, `instanceof`, discriminated unions, and caveats
- `07-generic.ts` — Generics: generic functions, type parameters (`T`), type inference, generic interfaces (`apiResponse<T>`), and generics vs `any`
- `08-generic-with-promise.ts` — Generics with Promises: async/await handling, `Promise<T | undefined>`, API response typing, and error narrowing

---

## Folder Structure

```text
TypeScript/
├── tsconfig.json
├── README.md
├── 01-TypeScript Fundamentals/
├── 02-TypeScript Advanced Type/
└── 03-Object Oriented Programming in TypeScript/
```
