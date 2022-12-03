class BankAccount{
    constructor(intRate, balance) { 
        this.intRate = intRate
        this.balance = balance
    }
    deposit(amount) {
	this.balance += amount
    return this
    }
    withdraw(amount) {
        if(this.balance <= 0){
            this.balance -= 5
            console.log('Insufficient Funds. $5 fee charged')
        } else {
            this.balance -= amount
            return this
        }
    }
    displayAccountInfo() {
        console.log('Balance: $' + this.balance)
    }
    yieldInterest() {
        if (this.balance > 0){
            this.balance *= this.intRate
        } else {console.log('Nope, not enough')}
    return this
    }
}

const ryan = new BankAccount(5,200)
const mark = new BankAccount(3,130)
const test = new BankAccount(2,20)

ryan.deposit(25).deposit(68).deposit(100).withdraw(30).yieldInterest().displayAccountInfo()

mark.deposit(25).deposit(80).withdraw(20).withdraw(56).withdraw(60).withdraw(100).yieldInterest().displayAccountInfo()

test.deposit(20).withdraw(42).yieldInterest().displayAccountInfo()