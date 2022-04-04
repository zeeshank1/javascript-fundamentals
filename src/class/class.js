
//*Syntaical sugar over javascript Prototype based inhertiance,
//*Classes does not introduce any new javascript inhertiance model

//* a class syntax has two components - class expression and declartion
class Bike{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
}

var bikeOne = new Bike('Red','Ducati');

console.log('bikeOne', bikeOne);