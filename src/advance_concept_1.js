// 1. Closures: A function with access to its outer scope even after the outer function has returned
function closureExample() {
    let count = 0;

    return function increment() {
        count++;
        console.log(`Current count: ${count}`);
    };
}

const incrementCounter = closureExample();
incrementCounter(); // Current count: 1
incrementCounter(); // Current count: 2

// 2. Promises and Async/Await: Demonstrating asynchronous programming
function asyncOperation(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 0) resolve(`Resolved with value: ${value}`);
            else reject("Value must be greater than 0");
        }, 1000);
    });
}

async function handleAsync() {
    try {
        const result = await asyncOperation(5);
        console.log(result); // Resolved with value: 5
    } catch (error) {
        console.error(error);
    }
}

handleAsync();

// 3. Classes and Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

// 4. Functional Programming: Higher-order functions (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];

// Use `map` to create a new array with squared values
const squares = numbers.map((num) => num * num);
console.log("Squares:", squares); // Squares: [1, 4, 9, 16, 25]

// Use `filter` to get numbers greater than 2
const greaterThanTwo = numbers.filter((num) => num > 2);
console.log("Numbers greater than 2:", greaterThanTwo); // [3, 4, 5]

// Use `reduce` to find the sum of the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // Sum: 15

// 5. Destructuring and Spread Operator
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// Object Destructuring
const { firstName, age } = person;
console.log(`Name: ${firstName}, Age: ${age}`); // Name: John, Age: 30

// Array Spread
const moreNumbers = [...numbers, 6, 7];
console.log("More Numbers:", moreNumbers); // [1, 2, 3, 4, 5, 6, 7]

// 6. Modules (ES6 Syntax)
// In a real-world project, you would use import/export to modularize your code.
// Example: export function add(a, b) { return a + b; }
// import { add } from './math.js';
