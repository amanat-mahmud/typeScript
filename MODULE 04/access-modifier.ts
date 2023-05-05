class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  // getBalance() {
  //   console.log(`My Current Balance is : ${this._balance}`);
  // }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
  //getter
  get balance(): number {
    return this._balance;
  }

  //setter
  set deposit(amount: number) {
    this._balance = this.balance + amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    console.log(this._balance);
  }
}

const myAccount = new BankAccount(444, "Persian", 20);
myAccount.addDeposit(20);
//   myAccount.getBalance();

console.log(myAccount.balance);
myAccount.deposit = 30;
console.log(myAccount.balance);
