/**
 * *NULL :
 * *Null is an empty value or non-existent value.
 * *Null must be assigned.
 */
let a = null;
console.log("Logging null value : ", a);

/**
 * *UNDEFINED :
 * *Undefined most typically means a variable is declare but not defined.
 */
let b;
console.log("Logging declared but not-defined value : ", b);

//You can set a variable value explicity to undefined
let c = undefined;
console.log("Logging declared and defined variable as undefined : ", c);

//When looking up non-existening properties in an object
let obj = {};
console.log("Logging non-existening property in an object : ", obj.fake);

/**
 *  *Relationship of Null and Undefined with Falsy values
 *  *null and undefined are two of falsy value from Javascipt falsy values viz. :
 *  *false
 *  *0
 *  *""(empty string)
 *  *NaN
 * ! Any other value in javasciprt is consider as Truthy
 */

/**
 * *Relationship of Null and Undefined with Primitive Values
 * *Both Null and Undefined are part of 6 primitive values in Javascript viz. :
 * *Boolean
 * *Number
 * *String
 * *Symbol
 * ! All other values in javascript are objects (Object, functions, Arrays etc.)
 */

//Exception case for typeOf operator on null and undefined
//typeof operator on null is object, This is a mistake from the creator of JS from the beginning.
let n = null;
console.log("typeOf null : ", typeof n);

let us = undefined;
console.log("typeOf undefined : ", typeof us);

//Comparing null and undefined without type
console.log("null !== undefined is - ", null != undefined); //FALSE
console.log("null === undefined is - ", null == undefined); //TRUE, Since both are falsy value

//Comparing null and undefined with type
console.log("null !== undefined is - ", null !== undefined); //TRUE
console.log("null === undefined is - ", null === undefined); //FALSE, Since both are of differnet types

//Practial Difference between Null and undefined
let sayHi = (str = "hi") => {
  console.log(str);
};

//CASE 1 : No value passed as param
console.log("\nNo value passed as param in sayHi()");
sayHi();

//CASE 2 : value passed as param will override the defined value
console.log(
  "\nvalue passed as param will override the defined value in sayHi(me)"
);
sayHi("me");

//CASE 3 : when null is passed as param, it will override the defined value
console.log(
  "\nwhen null is passed as param, it will override the defined value sayHi(null)"
);
sayHi(null);

//CASE 4 : when undefined is passed as param, it has no affect since its not consider as a value like null
console.log(
  "\nwhen undefined is passed as param, it has no affect since its not consider as a value like null sayHi(undefined)"
);
sayHi(undefined);
