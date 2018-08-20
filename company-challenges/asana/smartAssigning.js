const smartAssigning = (names, statuses, projects, tasks) => {
  let stopIndexes = [];
  statuses.forEach((status, index) => {
    if (status === true) {
      stopIndexes.push(index);
    }
  });

  let minimumNumberOfTasks = Number.POSITIVE_INFINITY;

  tasks.forEach((task, index) => {
    const isStopIndex = (stopIndexes.indexOf(index) !== -1 ? true : false);
    if (task < minimumNumberOfTasks && (!isStopIndex)) {
      minimumNumberOfTasks = task;
    }
  });

  // // get all the indexes of individuals who have task = minimumNumberOfTasks
  let currentIndex = 0;
  let indexesArray = [];
  while (currentIndex < tasks.length) {
    const index = tasks.indexOf(minimumNumberOfTasks, currentIndex);

    const isStopIndex = (stopIndexes.indexOf(index) !== -1 ? true : false);
    if (!isStopIndex && (index !== -1)) {
      indexesArray.push(index);
    }

    if (index === -1) {
      currentIndex = tasks.length;
    } else {
      currentIndex = index + 1;
    }
  }


  // loop over the projects array to get the minimum out of all those indexes in indexesArray
  let minimumProjectCount = Number.POSITIVE_INFINITY;
  let minimumProjectIndex = undefined;
  indexesArray.forEach((index) => {
    const projectsNum = projects[index];
    if (projectsNum < minimumProjectCount) {
      minimumProjectCount = projectsNum;
      minimumProjectIndex = index;
    }
  });

  return names[minimumProjectIndex];
};


const names = ["John", "Martin"];
const statuses = [false, true];
const projects = [2, 1];
const tasks = [6, 5];

console.log(smartAssigning(names, statuses, projects, tasks));