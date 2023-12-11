
// Imports fs and path
const fs = require('fs');
const path = require('path');

// Get the directory path and file extension from the command line
const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

// Read the contents of the directory asynchronously
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter files by the specified file extension
  const filteredFiles = files.filter(file => path.extname(file) === `.${fileExtension}`);

  // Print the filtered list of files to the console
  filteredFiles.forEach(file => console.log(file));
});
