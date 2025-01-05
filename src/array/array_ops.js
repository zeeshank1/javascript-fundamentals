// Sample data: Array of products
const products = [
  { name: "Laptop", category: "Electronics", price: 800, stock: 10 },
  { name: "Phone", category: "Electronics", price: 600, stock: 3 },
  { name: "Headphones", category: "Electronics", price: 150, stock: 15 },
  { name: "Shoes", category: "Apparel", price: 120, stock: 7 },
  { name: "T-Shirt", category: "Apparel", price: 20, stock: 2 },
  { name: "Watch", category: "Accessories", price: 200, stock: 8 },
  { name: "Bag", category: "Accessories", price: 100, stock: 1 },
];

// Step 1: Filter products in the "Electronics" category and in stock
const electronicsInStock = products.filter(
  (product) => product.category === "Electronics" && product.stock > 0
);

console.log("Electronics in Stock:");
console.log(electronicsInStock);

// Step 2: Sort products by price in ascending order
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

console.log("\nProducts sorted by price:");
console.log(sortedByPrice);

// Step 3: Compute total value of stock for each product
const stockValue = products.map((product) => ({
  ...product,
  totalStockValue: product.price * product.stock,
}));

console.log("\nProducts with total stock value:");
console.log(stockValue);

// Step 4: Get names of products with stock less than 5
const lowStockProducts = products
  .filter((product) => product.stock < 5)
  .map((product) => product.name);

console.log("\nLow stock products:");
console.log(lowStockProducts);

