// run `node index.js` in the terminal

const fs = require('fs');

// CREATING AND WRITING A FILE
console.log('Creating and Writing a file');
fs.writeFile(
  'text1.txt',
  "Learning 'fs' core module of Node.js!",
  function (err) {
    if (err) {
      return console.error(err);
    }

    console.log('Data written successfully!');
    console.log("Let's read newly written data");

    //READING AN EXISTING FILE
    fs.readFile('text1.txt', function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log('Asynchronous read: ' + data.toString());
    });
  }
);
