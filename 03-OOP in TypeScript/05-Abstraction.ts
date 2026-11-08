//* Abstraction in TypeScript OOP

// Abstract Parent Class:
// Rule: If a class has at least one abstract method, the class itself MUST be declared as 'abstract'.
// Note: We CANNOT create an instance directly from an abstract class (e.g., 'new Employee()' is not allowed).
abstract class Employee {
  // An abstract class can have data members (properties) and a constructor
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  // Normal (Non-abstract) Getter & Setter methods with full implementation
  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  // Abstract Method: Declared with 'abstract' keyword and has NO body/implementation {}.
  // It forces every child class (Manager, Developer) to write its own 'calculatePay()' logic!
  abstract calculatePay(): number;

  // If we uncomment the line below, both Manager and Developer will immediately show an error
  // until they also implement 'getResources(): string[]'!
  // abstract getResources(): string[];
}

// Child Class 1: Manager
// Must extend the abstract class and implement all of its abstract methods
class Manager extends Employee {
  calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

// Child Class 2: Developer
// Must also implement 'calculatePay()', otherwise TypeScript will throw a compile-time error
class Developer extends Employee {
  calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

// const emp = new Employee("Mir", 20000); // Error: Cannot create an instance of an abstract class.
const manager = new Manager("Asif", 25000);
const developer = new Developer("Alif", 25000);

console.log(manager.calculatePay());   // Output: 30000
console.log(developer.calculatePay()); // Output: 30000
