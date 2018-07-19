// The Problem
function fn(val) {
  setTimeout(function() {
    console.log(val)
  }, val)
}

function executeAll() {
  fn(20) // 1
  fn(20) // 2
  fn(400) // 3
  fn(20) // 4
}

// 20, 20, 400, 20

// executeAll()

// through callback

const callbackFn = (val, cb) => {
  setTimeout(() => {
    console.log(val);
    cb();
  }, val);
};

// callbackFn(20, () => {
//   callbackFn(20, () => {
//     callbackFn(400, () => {
//       callbackFn(20, () => {

//       });
//     });
//   });
// });

// through promises
const promiseFn = (val) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(val);
      resolve();
    }, val);
  })
);

// promiseFn(20)
//   .then(() => promiseFn(20))
//   .then(() => promiseFn(400))
//   .then(() => promiseFn(20))

// through async/await
const asyncAwaitFn = (val) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(val);
      resolve();
    }, val);
  })
);

const asyncFunc = async () => {
  await asyncAwaitFn(20);
  await asyncAwaitFn(20);
  await asyncAwaitFn(400);
  await asyncAwaitFn(20);
}

asyncFunc();



