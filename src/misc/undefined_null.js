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
 * *Relationship of Null and Undefined with Falsy values
 *  *null and undefined are two of falsy value from Javascipt falsy values viz. :
 *  *false
 *  *0
 *  *""(empty string)
 *  *NaN
 * ! Any other value in javasciprt is consider as Truthy
 */