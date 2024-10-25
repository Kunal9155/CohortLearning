// I/O heavy operations:: 

// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

// Examples of I/O Heavy Operations:
// Reading a file
// Starting a clock
// HTTP Requests

// Reading a file ,  for a reading a file we need a library called 'fs'



const fs = require("fs");


// Syncronous Way ->>>     fs.readFileSync
const contents = fs.readFileSync("a.txt", "utf-8");     //reading content of file 'a.txt'
console.log(contents);

const data = fs.readFileSync("b.txt" ,"utf-8");         //reading content of file 'b.txt'
console.log(data);

// Asyncronous Way ->>> fs.readFile

const content_async = fs.readFile("a.txt" , "utf-8", function(err , content_async){
    console.log("content of a using asyncronous approach "  +content_async);
});

console.log("________________");

fs.readFile("a.txt" , "utf-8")


 