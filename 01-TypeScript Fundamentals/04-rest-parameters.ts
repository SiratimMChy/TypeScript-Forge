//  Rest Parameters (..arrays)
const sum = (...numbers: number[]) => {
  return numbers.reduce((total, cur) => total + cur, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6));

const logUserAction = (...args: [name: string, age: number, istrue: boolean]) => {
  const [name, age, istrue] = args;
  console.log(name + " is " + age + ", Active: " + istrue);
};

logUserAction("Tuha", 24, true);
