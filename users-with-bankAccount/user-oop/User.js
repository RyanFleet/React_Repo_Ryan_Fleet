class User {
    constructor(username, emailAddress){
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance += amount
        return this
    }
    makeWithdrawl(amount){
        this.accountBalance -= amount
        return this
    }
    displayBalance(){
        console.log('User: ' + this.name + ', Balance: $' + this.accountBalance)
    }
    transferMoney(otherUser, amount){
        otherUser.accountBalance += amount
        this.accountBalance -= amount
        return this
    }
}


const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const ryan = new User("Ryan Fleet", "random@rando.com");

guido.makeDeposit(100).makeDeposit(200).makeDeposit(50).makeWithdrawl(20).transferMoney(monty,30).transferMoney(ryan,20).displayBalance()

monty.makeDeposit(50).makeDeposit(45).makeWithdrawl(33).makeWithdrawl(12).displayBalance()

ryan.makeDeposit(200).displayBalance()