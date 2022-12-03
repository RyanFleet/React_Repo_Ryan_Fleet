class UserBank{
    constructor(name,email){
        this.name = name
        this.email = email
        this.account = new BankAccount(intRate=0.02, balance=0)
    }
}

const account1 = BankAccount();
const account2 = BankAccount();

const ryan = UserBank('Ryan Fleet', 'email@email.aol', account1)

ryan.makeDeposit(100).displayAccountInfo()
