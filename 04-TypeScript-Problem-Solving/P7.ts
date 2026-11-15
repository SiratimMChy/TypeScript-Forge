class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee{
    constructor(
        name: string, 
        baseSalary: number,
        private department: string
    ){
        super(name,baseSalary)
    }
    getRoleInfo(): string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
