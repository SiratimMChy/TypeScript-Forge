//* Polymorphism in TypeScript OOP
/* 
- "Poly" means "Many" and "Morph" means "Forms" -> "Many Forms".
- In OOP, Polymorphism allows different classes to share the exact same
  method name, while each class implements its own unique calculation or behavior.
*/
// Parent Class (Base Class)
class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  // Getter: Reads the private '_baseSalary' property
  get baseSalary(): number {
    return this._baseSalary;
  }

  // Setter: Validates and updates '_baseSalary'
  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  // Base Method: Calculates regular pay after deducting tax
  calculatePay(taxRate: number): number {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

// Child Class 1: Manager
// Notice: Manager has no extra properties, so it automatically uses Employee's constructor.
class Manager extends Employee {
  // 'override' keyword ensures this method actually exists in the parent class (Employee).
  // Also notice: We dropped the 'taxRate' parameter here because Manager doesn't need it!
  override calculatePay(): number {
    return this.baseSalary + 5000;
  }
}

// Child Class 2: Developer
class Developer extends Employee {
  // Developer adds a new property ('public type: string'), so it needs a constructor and 'super()'
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }

  // Overriding calculatePay() with Developer's own formula (Base Salary + 4000 bonus - Tax)
  override calculatePay(taxrate: number): number {
    return this.baseSalary + 4000 - this.baseSalary * taxrate;
  }
}


// Step 1: If Manager is empty, it just uses Employee's default calculatePay(taxRate) method.
// class Manager extends Employee {}

// Step 2: Earlier we passed 'taxRate: number' in Manager even though we didn't use it inside.
// In TypeScript, a child method is allowed to ignore/drop parameters it doesn't need!
// class Manager extends Employee {
//   calculatePay(taxRate : number) {
//     return this.baseSalary + 5000;
//   }
// } 


const employee = new Employee("asif", 25000);
const manager = new Manager("asif", 25000);
const developer = new Developer("Alif", 25000, "Full Stack");

console.log(employee.calculatePay(0.1));   // Output: 22500 (25000 - 10% tax)
console.log(manager.calculatePay());       // Output: 30000 (25000 + 5000 bonus, no tax)
console.log(developer.calculatePay(0.10)); // Output: 26500 (25000 + 4000 bonus - 10% tax on base)
