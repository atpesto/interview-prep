// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: null # since there is no common slot whose duration is 12

const ifContains = ([startA, endA], [startB, endB], duration) => {
  const [startA, endA] = slotA;
  const [startB, endB] = slotB;

  const start = Math.max(startA, startB);
  const end = Math.min(endA, endB);

  if ((start + duration) <= end) {
    return {
      success: true,
      data: [start, start + duration],
    };
  }

  return {
    success: false,
    data: [],
  };
};

const checkIfReplaceable = ([answerStart, answerEnd], [dataStart, dataEnd]) => {
  if ((answerStart - dataStart) > 0) {
    return true;
  }
  return false;
}


const meetingPlanner = (slotsA, slotsB, dur) => {
  let answer = [];
  slotsA.forEach((slotA) => {
    slotsB.forEach((slotB) => {
      const { success, data } = ifContains(slotA, slotB, dur);
      if (success === true) {
        const status = checkIfReplaceable(answer, data);
        if ((status === true) || (answer.length === 0)) {
          answer = data;
        }
      }
    });
  });

  return answer;
};

const slotsA = [[10, 50], [60, 120], [140, 210]];
const slotsB = [[0, 15], [60, 70]];
const duration = 8;

console.log(meetingPlanner(slotsA, slotsB, duration));