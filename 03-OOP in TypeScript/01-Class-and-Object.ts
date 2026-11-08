class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee = new Employee("Mir", 22300);
const employee1 = new Employee("Asif", 35000);

console.log(employee);
console.log(employee1);
console.log(employee instanceof Employee);
console.log(employee1 instanceof Employee);
