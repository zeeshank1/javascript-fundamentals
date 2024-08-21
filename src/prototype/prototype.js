
//Create OBJECT using constructor
function Bike(color, model) {
  this.color = color;
  this.model = model;

  this.getDetails = function () {
    return "" + `COLOR ${this.color} :: MODEL ${this.model}`;
  };
}

Bike.prototype.getDetailsViaPrototype = function () {
  return `COLOR ${this.color} + MODEL ${this.model}`
}

var bikeOne = new Bike("Black", "BMW");
var bikeTwo = new Bike("Orange", "KTM");

console.log("bikeOne -> ", bikeOne.__proto__.getDetailsViaPrototype());
console.log("Bike -> ", Bike.prototype.getDetailsViaPrototype());
