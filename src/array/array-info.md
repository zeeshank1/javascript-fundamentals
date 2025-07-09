JavaScript’s Array.prototype.sort() can behave unexpectedly with negative numbers (and numbers in general) if not using a compare function.

🔥 Problem
By default, sort() converts elements to strings and sorts them lexicographically (i.e., like words), not numerically.

😬 Example (Unexpected Behavior):
```javascript
const numbers = [10, 2, -5, 0, -1];
console.log(numbers.sort()); 
// Output: [-1, -5, 0, 10, 2] ❌ wrong order
```
✅ Solution: Use a Compare Function
To sort numbers correctly (including negative values), pass a compare function to sort().
```javascript
const numbers = [10, 2, -5, 0, -1];
numbers.sort((a, b) => a - b);  // Ascending
console.log(numbers);  // Output: [-5, -1, 0, 2, 10]
```
