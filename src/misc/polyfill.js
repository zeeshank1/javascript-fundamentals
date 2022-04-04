let names ={
    firstName : "zeeshan",
    lastName : "khan"
}

let printName = function(){
    console.log(this.firstName);
}

let printNameParam = function(city){
    console.log(this.firstName + "_"+city);
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

Function.prototype.myBindParams = function(...args){
    let obj = this;//refering to the callee of this method i.e., printName
    let params = args.slice(1);
    return function(){
        obj.apply(args[0],params); // refere to the names object
    }
}

let newFunMyBindParams = printNameParam.myBindParams(names,"indore");
newFunMyBindParams();


