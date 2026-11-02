/*
Side Note: Array, Tuple & Readonly Modifier

What is an Array?
An Array is used to store multiple values of the same type
in a single variable.

What is a Tuple?
A Tuple allows us to store a fixed number of values.
Each value can have a different type and a specific position.

What is the Readonly Modifier?
Readonly prevents us from changing the values of an Array
or Tuple after they are created.

Array Syntax:
- string[] and Array<string> both are used to create
  an Array of strings. Both work in the same way.

Important:
- Array can store multiple values of the same type.
- Tuple has a fixed structure and specific types for each position.
- Readonly allows us to read values but prevents modification.
*/
const arr : string[] = ["string","array"];
const numArr : number[] = [1,2,3,4];
const arr1 : Array<string> = ["string","array"];
const DhakaLatLong : readonly[number , number]= [23.8111, 90.4076];
