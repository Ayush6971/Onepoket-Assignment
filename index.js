// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.

// inbuilt library of NodeJS to create HTTP servers and handle HTTP requests and responses
const http = require('http');

const server = http.createServer((req, res) => {
    // setting the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // sending response with "Hello, World!"
    return res.end('Hello, World!');
});

// start the server and make it listen on port 3000
server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000/');
});


// Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

/**
 * @param {Array} arr 
 * @returns {Integer}
 */
function sumArrayIntegers(arr) {
    // validating parameter of function to be an array
    if (!Array.isArray(arr)) throw new Error('Input is not an array!')

    // Using the Array.reduce() method to calculate the sum of all numbers
    const sum = arr.reduce((accumulator, current) => {

        // validating each index of an array to be an Integer
        if (typeof current !== 'number') throw new Error('Array contains non-integer values');

        return accumulator + current
    }, 0)

    return sum;
}

const numArr = [1, 2, 3, 4, 5];
const result = sumArrayIntegers(numArr);
console.log('Sum:', result);


// Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.

// fs module to read/ write file synchronously and asynchronously
const fs = require('fs');
const filename = './data.txt';

// read file asynchronously and count words 
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
        return;
    }

    // Remove any white spaces and newlines then split the content into words
    const words = data.trim().split(/\s+/);

    // Calculate the word count
    const wordCount = words.length;

    console.log('Total word count:', wordCount);
});


