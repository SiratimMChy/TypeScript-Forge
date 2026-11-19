const getFirstElement = <T>(items: T[]): T | undefined => {
  if (items.length === 0) {
    return undefined;
  }
  return items[0];
};

console.log(getFirstElement([10, 20, 30]));       // Output: 10
console.log(getFirstElement(["apple", "banana"])); // Output: "apple"
console.log(getFirstElement([]));                 // Output: undefined
