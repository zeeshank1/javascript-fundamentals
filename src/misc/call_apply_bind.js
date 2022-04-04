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

printFullNameParam.apply(namesTwo,["Zee1","Kh1"]);

