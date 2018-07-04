function checkBalancedParanthesis(str) {
  return balancedParanthesisChecker(str, '');
}

function balancedParanthesisChecker(str, stackedSequence) {
  const openParanthesis = '(';
  const closedParanthesis = ')';
  let posOfOpenParanthesis = str.indexOf(openParanthesis);
  let posOfClosedParanthesis = str.indexOf(closedParanthesis);

  let remainingStr;
  let remainingStackedSequence;

  if(posOfOpenParanthesis === -1) {
    posOfOpenParanthesis = str.length + 1;
  }
  if(posOfClosedParanthesis === -1) {
    posOfClosedParanthesis = str.length + 1;
  }

  if(posOfOpenParanthesis < posOfClosedParanthesis) {

    remainingStackedSequence = stackedSequence + openParanthesis;
    remainingStr = str.slice(posOfOpenParanthesis + 1);

  } else if (posOfOpenParanthesis > posOfClosedParanthesis) {

    const indexOfLastOpenParanthesis = stackedSequence.lastIndexOf(openParanthesis);

    if(indexOfLastOpenParanthesis !== -1) {
      remainingStackedSequence = stackedSequence.slice(0, indexOfLastOpenParanthesis);
    } else {
      return false;
    }

    remainingStr = str.slice(posOfClosedParanthesis + 1);

  } else {

    // terminating condition
    if(stackedSequence === '') {
      return true;
    }
    return false;

  }
  return balancedParanthesisChecker(remainingStr, remainingStackedSequence);
}

console.log(checkBalancedParanthesis('()()'));

