//* IIFE = Immeditely invoke function expression, a javscript function thats runs immeditely it is defined*/
//* Use IIFE to obtain data privacy, Any variable declared in IIFE is NOT accessible to outside world


//*This is function expression
(function () { console.log('IIFE example'); })();

//*This is function declartion
var namedFun = function () {
    console.log('Function declartion example');
}

//Explictily calling delcared function
namedFun();
