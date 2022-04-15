class Account {

  constructor(username) {
    this.username = username;
    this._balance = 0;
    this.transactions = [];
  }

  get balance () {
    const round = number => Number(Math.round(number+'e'+2)+'e-'+2);
    return round(this._balance)
  }
  set balance (amount) {this._balance += amount}

  addTransaction = transaction => this.transactions.push(transaction);

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
    this.transactionTime = Date(10);
    this.commit(); // << commit self
  }

  commit = () => {
    if (!this.allowed) return console.log(`Insufficient funds - Balance: $${this.account.balance}`);
    this.account.balance = this.value;
    this.account.addTransaction(this);
    this.printTransaction();
  }

  printTransaction = () => {
    const type = this.constructor.name;
    const report = `${type} of $${this.amount} ${type === 'Deposit' ? "to" : "from"} account_${this.account.username} - Total Account Balance: $${this.account.balance}`;
    console.log(report);
  }

}

class Deposit extends Transaction {

  get allowed () {return true;}
  get value () {return this.amount;}

}

class Withdrawal extends Transaction {

  get allowed () {return this.amount < this.account.balance;}
  get value () {return -this.amount;}

}
// == end class definitions ==


// == driver code ==
const myAccount = new Account("00001");

t1 = new Deposit(50.25, myAccount);
t2 = new Deposit(14.99, myAccount);
t3 = new Withdrawal(231.00, myAccount);
t4 = new Withdrawal(11.01, myAccount);