

const fs = require('fs');

// Get the file path from the command line
const filePath = process.argv[2];

// Read the file synchronously
const fileContent = fs.readFileSync(filePath, 'utf8');

// Split the content by newline characters and count the number of lines
const numberOfLines = fileContent.split('\n').length - 1;

// Print the number of newlines to the console
console.log(numberOfLines);
