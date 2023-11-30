// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.




function BankAccount(accountNumber,name,type,balance){
    this.Account_number=accountNumber
    this.name=name
    this.type=type
    this.balance=balance
    this.isActive=true
}

BankAccount.prototype.deposite=function(amount){
    this.balance=this.balance+amount
    console.log(`Amount Rs.${amount} successfully credited to your account.`)


}

BankAccount.prototype.withdraw=function(amount){
    this.balance=this.balance-amount
    console.log(`Amount Rs.${amount} successfully debited to your account`)
    

}
BankAccount.prototype.checkBalance=function(){
    console.log(`You have Rs. ${this.balance} left in your account.`);
   
       

}

BankAccount.prototype.isActive1=function(){

    if(this.isActive==true){
        console.log("Your account is Active");
    }


}


let myAccount=new BankAccount(123456,'Bittu Kumar','Saving',10000,)

myAccount.checkBalance()
myAccount.deposite(1000)
myAccount.checkBalance()
myAccount.withdraw(100)
myAccount.checkBalance()
myAccount.isActive1()

let myAccount1=new BankAccount(103454,'Sourav Kumar','Saving',10000,)
myAccount1.checkBalance()
myAccount1.deposite(1000)
myAccount1.checkBalance()
myAccount1.withdraw(100)
myAccount1.checkBalance()
myAccount1.isActive1()

let myAccount2=new BankAccount(123453,'Abhishek Kumar','Saving',10000,)
myAccount2.checkBalance()
myAccount2.deposite(1000)
myAccount2.checkBalance()
myAccount2.withdraw(100)
myAccount2.checkBalance()
myAccount2.isActive1()

let myAccount3=new BankAccount(123451,'Manish Kumar','Current',10000,)
myAccount3.checkBalance()
myAccount3.deposite(1000)
myAccount3.checkBalance()
myAccount3.withdraw(100)
myAccount3.checkBalance()
myAccount3.isActive1()


let allAccount=[myAccount,myAccount1,myAccount2,myAccount3]

function getTotal(accounts){
    var total=0
    for(let account of accounts){
        if(account.isActive){
            total+=account.balance

        }
       

    }

    return total
}


let total=getTotal(allAccount)
console.log(total);



