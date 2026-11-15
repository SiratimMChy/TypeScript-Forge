function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
        return value * 2;
}

console.log(multiplyValue(10));    // Output: 20
console.log(multiplyValue(10, 5)); // Output: 50
console.log(multiplyValue(7, 0));  // Output: 0

