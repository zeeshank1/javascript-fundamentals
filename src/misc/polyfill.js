let names ={
    firstName : "zeeshan",
    lastName : "khan"
}

let printName = function(){
    console.log(this.firstName);
}

let newFun = printName.bind(names);

//Create your own myBind method
//add to global top object like bind()
Function.prototype.myBind = function(...args){

    let obj = this;//refering to the callee of this method i.e., printName
    return function(){
        obj.call(args[0]); // refere to the names object
    }
}

let newFunMyBind = printName.myBind(names);
newFunMyBind();