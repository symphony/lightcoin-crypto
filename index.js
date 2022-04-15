class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }


}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit = () => this.account.balance += this.value;

}

class Deposit extends Transaction {

  get value () {return this.amount;}

}

class Withdrawal extends Transaction {

  get value () {return -this.amount;}

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const account1 = new Account("myAccount");

t1 = new Deposit(50.25, account1);
t1.commit();

t2 = new Deposit(9.99, account1);
t2.commit();

t3 = new Deposit(120.00, account1);
t3.commit();

console.log("Account balance:", account1.balance);