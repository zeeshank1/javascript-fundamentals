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

//Parameterized function
let printFullNameParam = function(fn, ln){
    console.log(fn+" "+ln);
}

printFullNameParam.call(namesTwo,"Zee","Kh");

//apply
printFullNameParam.apply(namesTwo,["Zee1","Kh1"]);

//bind
let newFun = printFullNameParam.bind(namesTwo,"Zee1b","Kh1b");

//call or invoke latter, it is a new function 
console.log(newFun);

//callind bind method
newFun();