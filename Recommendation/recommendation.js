const fs = require('fs');

const recommendation = () => {
  const mymap = new Map();
  fs.readFile('./artists.txt', (err, data) => {
    if (err) {
      return err;
    }
    const arr = data.toString().split('\n');
    for (let i = 0; i < arr.length; i += 1) {
      const userArray = arr[i].split(',');
      for (let k = 0; k < userArray.length; k += 1) {
        for (let j = k + 1; j < userArray.length; j += 1) {
          const key = [userArray[k], userArray[j]].sort().toString();
          if (mymap.has(key)) {
            const val = mymap.get(key);
            mymap.set(key, val + 1);
          } else {
            mymap.set(key, 1);
          }
        }
      }
    }
    mymap.forEach((val, key) => {
      if (val >= 50) {
        console.log(key, val);
      }
    });
  });
};

recommendation();