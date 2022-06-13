const fs = require('fs');

// DELETING AN EXISTING FILE
console.log('********* deleting an existing file *********');
fs.unlink('text1.txt', function (err) {
  if (err) return console.error(err);

  console.log('File deleted successfully!');
});
