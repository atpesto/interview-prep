// const findIfUnique = (str) => {
//   const fn = ([head, ...tail], char) => {
//     if (head === undefined) {
//       return true;
//     }
//     if (head === char) {
//       return false;
//     }
//     return fn(tail, head);
//   }
//   return fn(str, '');
// }

// console.log(findIfUnique('adcdd'));
// const findIfUnique = (str) => {

// }
const checkPermutation = (str1, str2) => {
  // store it in object
  const obj = {};
  const storeInObj = ([head1, ...tail1]) => {
    console.log(head1);
    if(head1 === undefined) {
      return;
    }

    if (!obj[head1]) {
      obj[head1] = true;
    }
    storeInObj(tail1);
  }

  storeInObj(str1);
  console.log(obj);
}


checkPermutation('abc', 'def');