class Account {

  constructor(username) {
    this.username = username;
    this._balance = 0;
    this.transactions = [];
  }

  get balance() {return this._balance;}
  set balance(amount) {this._balance += amount;}
  addTransaction = (transaction) => this.transactions.push(transaction);

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
    this.commit();
    this.account.addTransaction(this);
  }

  commit = () => this.account.balance = this.value;

}

class Deposit extends Transaction {

  get value () {return this.amount;}

}

class Withdrawal extends Transaction {

  get value () {return -this.amount;}

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("myAccount");

t1 = new Deposit(50.25, myAccount);
t2 = new Deposit(14.99, myAccount);
t3 = new Withdrawal(21.00, myAccount);

console.log("Account balance:", myAccount.balance);
console.log("account transactions", myAccount.transactions);
// console.log("transaction 1", t1);