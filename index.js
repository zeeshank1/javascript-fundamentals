//Data change with Mutation

var players = {
    score: "1",
    name: "Zeeshan",
};
console.log("Data change with Mutation : Before ", players);

players.score = "2";
console.log("Data change with Mutation : After ", players);

//Data change without Mutation (Immutability)

var subject = {
    name: "Data Structure",
    maxMarks: 90,
};
console.log("\nData change without Mutation : before ", subject);

var newSubject = Object.assign({}, subject, { maxMarks: 100 }); //1st param : an empty object to copy, 2nd Param : object you are copying, 3rd param (OPTIONAL): values which you are adding or overrding
console.log("Data change without Mutation : After ", newSubject);

var newSubjectUsingSpreadOperator = {...subject, maxMarks: 120 }; //ES6 Spread Operator
console.log(
    "\n\nData change without Mutation : After ",
    newSubjectUsingSpreadOperator
);