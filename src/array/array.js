//A slice method

//A.1 slice method to copy an array (Immutability)
var fruits = ["mango", "banana", "apple", "strawberry"];
console.log("Array created :", fruits);
fruits[4] = "pineapple";
console.log("Array mutated :", fruits);

var newFruits = fruits.slice(); //slice method returns a new array
fruits[5] = "woodapple";
console.log("Old Array after slice() :", fruits);
console.log("New Array after slice() :", newFruits);

//Array fill method
var newArray = Array(7).fill("ZEE");
console.log(
  "a new array is created with size = 7 and all indexes are set to ZEE -`",
  newArray
);

//Array filter method
var arrayObj = ["a", "b", "c", "d"];
var newArrayObj = arrayObj.filter((val) => val != "a"); //
console.log('Get all values from the array except \"a\" :', newArrayObj);
