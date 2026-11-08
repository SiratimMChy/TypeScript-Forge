//* Inheritance in TypeScript OOP

// Parent Class (Base Class)
class Employee {
  constructor(
    public name: string,
    // Previously this was 'private _baseSalary: number'.
    // We changed it to 'protected' so the child class (Manager) can also access it directly.
    protected _baseSalary: number,
  ) {}

  /* Why was this getter commented out earlier?
    When '_baseSalary' was 'private' and we turned off this getter, 
    the Manager class could NOT access the salary at all (it gave an error).
    After changing '_baseSalary' to 'protected', Manager can directly use 'this._baseSalary' 
    even without this getter!
  get baseSalary(): number {
    return this._baseSalary;
  } 
  */

  // Getter: Allows reading 'employee.baseSalary' from outside the class
  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return (this._baseSalary += 9500);
  }

  get SalaryIncrement(): number {
    return (this._baseSalary *= 1.5);
  }

  // Setter: Updates the salary safely after checking if the value is valid
  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

// Child Class: 'Manager' inherits properties and methods from 'Employee' using 'extends'
class Manager extends Employee {
  /* 
   Long way (Manual declaration without constructor shortcut):
  teamMemberCount: number;

  constructor(name: string, _baseSalary: number, teamMemberCount: number) {
    super(name, _baseSalary);
    this.teamMemberCount = teamMemberCount;
  } 
  */

  // Short way (Using 'public' parameter property for the new 'teamMemberCount' property):
  // Note: 'name' and '_baseSalary' do NOT need 'public'/'protected' here because they already exist in Employee.
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    // 'super()' calls the Employee constructor to set up 'name' and '_baseSalary'
    super(name, _baseSalary);
  }

  describeWorks(): string {
    return `${this.name} manage ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    // Here we directly use 'this._baseSalary' (with underscore) instead of the getter.
    // This works inside Manager ONLY because '_baseSalary' is 'protected' in Employee (not 'private').
    return `${this.name} earns ${this._baseSalary}`;
  }
}

const manager = new Manager("Asif", 25000, 200);
const employee = new Employee("Mir", 22300);
const employee1 = new Employee("Asif", 35000);

employee.baseSalary = 23000;
console.log(`Basic Salary is ${employee.baseSalary}`);
console.log(`Basic Salary With Bonus ${employee.salaryWithBonus}`);
console.log(`Basic Salary With Increment ${employee.SalaryIncrement}`);
console.log(employee.describe());
console.log(
  `He is ${manager.name} He manage ${manager.teamMemberCount} members on his office each member basic salary is ${manager.baseSalary}`,
);
console.log(manager.describe());
