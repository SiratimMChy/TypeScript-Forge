const calculateAverage = (...numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0;
  }
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
};


console.log(calculateAverage(10, 20, 30)); // Output: 20
console.log(calculateAverage(5, 15));      // Output: 10
console.log(calculateAverage());           // Output: 0
