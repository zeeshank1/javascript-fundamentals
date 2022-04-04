let names ={
    firstName : "Zeeshan",
    lastName : "Khan",
    printFullName : function(){
        console.log(this.firstName+ " "+this.lastName);
    }
}

names.printFullName();

let namesTwo = {
    firstName : "Sachin",
    lastName : "Sharma"
}


//Function Borrowing
names.printFullName.call(namesTwo);