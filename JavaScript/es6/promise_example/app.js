const fs = require('fs');

// 原始写法
fs.readFile('./files/test.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// 使用Promise写法
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