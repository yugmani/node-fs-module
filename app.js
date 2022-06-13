// APPENDING TO A FILE
const fs = require('fs');

const data =
  '\nLearning to create, read, append a file using "fs" module of node.js!';

// OPENING AN EXISING FILE
// console.log('********* Opening File! *********');
// fs.open('text1.txt', 'r+', function (err, fd) {
//   if (err) return console.error(err);

//   console.log('File opened successfully!');
// });

//Append data to a file
console.log('********* Appending a data to an existing file. *********');
fs.appendFile('text1.txt', data, 'utf-8', function (err) {
  if (err) {
    throw err;
  }

  console.log('Data is appended to file successfully.');
});

// Reading an existing file
console.log('********* Reading an existing file *********');
fs.readFile('text1.txt', function (err, data) {
  if (err) return console.error(err);

  console.log('The updated file: ' + data.toString());
});

// CLOSING THE OPENED FILE
// console.log('********* Closing File *********');
// fs.close(1, function (err) {
//   if (err) return console.error(err);

//   console.log('File closed successfully!');
// });


