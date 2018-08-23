const launchSequenceChecker = (systemNames, stepNumbers) => {
  const obj = {};

  systemNames.forEach((systemName, index) => {
    let value = obj[systemName];
    const stepNumberVal = stepNumbers[index];
    if (value === undefined) {
      const newValueArray = [stepNumberVal];

      obj[systemName] = newValueArray;
    } else {
      obj[systemName] = [...value, stepNumberVal];
    }
  });

  const objectValues = Object.values(obj);
  let j = 0;
  while (j < objectValues.length) {
    let arr = objectValues[j];
    let i = 0;

    if (arr.length > 1) {
      while (i < arr.length) {
        if (i > 0) {
          if (arr[i - 1] >= arr[i]) {
            return false;
          }
        }
        i += 1;
      }
    }
    j += 1;
  }

  return true;
};