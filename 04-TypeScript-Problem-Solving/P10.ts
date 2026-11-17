class BankAccount {
  constructor(
    public readonly accountNumber: string,
    public holderName: string,
    private _balance: number,
  ) {}

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Deposit amount must be greater than zero.");
    }
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdraw amount must be greater than zero.");
    } else if (amount > this._balance) {
      console.log("Insufficient balance.");
    } else {
      this._balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
    }
  }
}

const myAccount = new BankAccount("AC-1001", "Siratim", 5000);
console.log("Initial Balance:", myAccount.balance);
myAccount.deposit(2000);
myAccount.withdraw(3000);
myAccount.withdraw(6000);
console.log("Final Balance:", myAccount.balance);
