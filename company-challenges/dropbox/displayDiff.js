const displayDiff = (oldVersion, newVersion) => {
  const oldVersionLength = oldVersion.length;
  const newVersionLength = newVersion.length;

  const maxLength = Math.max(oldVersionLength, newVersionLength);

  let oldVersionIndex = 0;
  let newVersionIndex = 0;

  let diffString = '';

  while ((oldVersionIndex < maxLength) && (newVersionIndex < maxLength)) {
    const currentOldVersionChar = oldVersion[oldVersionIndex];
    const currentNewVersionChar = newVersion[newVersionIndex];

    if (currentOldVersionChar !== currentNewVersionChar) {
      let tempOldVersionIndex = oldVersionIndex;
      let tempNewVersionIndex = newVersionIndex;

      let oldDiffCount = 0;
      let newDiffCount = 0;

      while (oldVersion[tempOldVersionIndex] !== currentNewVersionChar && tempOldVersionIndex < oldVersionLength) {
        oldDiffCount += 1;
        tempOldVersionIndex += 1;
      }

      while (newVersion[tempNewVersionIndex] !== currentOldVersionChar && tempNewVersionIndex < newVersionLength) {
        newDiffCount += 1;
        tempNewVersionIndex += 1;
      }

      if (oldDiffCount > newDiffCount) {
        diffString += '['
        while (newVersion[newVersionIndex] !== currentOldVersionChar && newVersionIndex < newVersionLength) {
          diffString += newVersion[newVersionIndex];
          newVersionIndex += 1;
        }
        diffString += ']';
      } else if (oldDiffCount < newDiffCount) {
        diffString += '('
        while (oldVersion[oldVersionIndex] !== currentNewVersionChar && oldVersionIndex < oldVersionLength) {
          diffString += oldVersion[oldVersionIndex];
          oldVersionIndex += 1;
        }
        diffString += ')';
      }
    } else {
      diffString += currentNewVersionChar;
      oldVersionIndex += 1;
      newVersionIndex += 1;
    }
  }

  return diffString;
};


const oldVersion = 'same_prefix_1233_same_suffix';
const newVersion = 'same_prefix23453_same_suffix';

console.log(displayDiff(oldVersion, newVersion));


const expected = "same_prefix(_1)23[45]3_same_suffix";
console.log("expected: ", expected);
