const fs = require('fs');

const p = new Promise(function(resolve, reject) {
  fs.readFile('./files/test.txt', (err, data) => {
    if(err) reject(err);
    resolve(data);
  });
});

p.then(function(resp) {
  console.log(resp.toString());
}, function(error) {
  console.log(error);
});