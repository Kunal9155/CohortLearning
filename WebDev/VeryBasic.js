let name = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function-scoped

let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"

//if-else
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

//Objects { key- value pair }
let user = {
	name: "Harkirat",  //name is key and harkirat is value
	age: 19
}

console.log("Harkirats age is " + user.age);

//Array
const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

//Array of objects
const emps = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}
]
const user1 = emps[0].name 
const user1Age = emps[0].age

// Object of Object
const user11 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user11.address.city;