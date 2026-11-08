// Encapsulation

/* 
four Access Modifiers:
Public
private
protected
readonly
*/

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return (this._baseSalary += 9500);
  }

  get SalaryIncrement(): number {
    return (this._baseSalary *= 1.5);
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }
}

const employee = new Employee("Mir", 22300);
const employee1 = new Employee("Asif", 35000);

employee.baseSalary = 23000;
console.log(`Basic Salary is ${employee.baseSalary}`);
console.log(`Basic Salary With Bonus ${employee.salaryWithBonus}`);
console.log(`Basic Salary With Increment ${employee.SalaryIncrement}`);
