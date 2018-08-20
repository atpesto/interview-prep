const tasksTypes = (deadlines, day) => {
  let labels = [0, 0, 0];
  deadlines.forEach((deadline) => {
    if (deadline <= day) {
      labels[0] += 1;
    } else if ((day + 1) <= deadline && deadline <= (day + 7)) {
      labels[1] += 1;
    } else {
      labels[2] += 1;
    }
  });

  return labels;
};

console.log(tasksTypes([1, 2, 3, 4, 5], 2));