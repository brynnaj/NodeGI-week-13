
const fs = require('fs');

// Gets the file path from the command line 
const filePath = process.argv[2];

// Reads the file asynchronously
fs.readFile(filePath, 'utf8', (err, fileContent) => {
  if (err) {
    console.error(err);
    return;
  }

  const numberOfLines = fileContent.split('\n').length - 1;

  // Print the number of newlines to the console
  console.log(numberOfLines);
});

