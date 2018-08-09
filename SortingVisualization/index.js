const numberOfTowers = 100;
const heightMultiplier = 10;
const speed = 100;
const color = 'royalblue';
const defaultWidth = '10px';


const createHTMLElements = numberOfTowers => {
  let count = 0;
  const rootElement = document.querySelector('#root');

  while (count < numberOfTowers) {
    const divElement = document.createElement('div');
    divElement.style.background = color;
    divElement.style.width = defaultWidth;
    divElement.style.alignSelf = 'flex-end';

    const dataIDAttr = document.createAttribute('data-id');
    dataIDAttr.value = count;
    divElement.setAttributeNode(dataIDAttr);

    rootElement.appendChild(divElement);

    count += 1;
  }
};

const init = () => {
  const towerArray = [];

  for (let count = 0; count < numberOfTowers; count += 1) {
    towerArray[count] = 0;
  }

  return towerArray;
};

const setHeight = (towerElement, height) => {
  const heightInPX = `${height * 50}px`;
  towerElement.style.height = heightInPX;
};

const manipulateDOMTowers = (towerArray) => {
  for (let count = 0; count < numberOfTowers; count += 1) {
    const domElement = document.querySelector(`[data-id="${count}"]`);
    const height = towerArray[count];
    setHeight(domElement, height);
  }
};


const getRandomValuesArray = (howMany) => {
  const randomValuesArray = [];

  for (let count = 0; count < howMany; count += 1) {
    const randomValue = Math.floor(Math.random() * heightMultiplier);
    randomValuesArray.push(randomValue);
  }

  return randomValuesArray;
};

const setTowerHeights = (towerArray, heightsArray) => {
  for (let count = 0; count < numberOfTowers; count += 1) {
    towerArray[count] = heightsArray[count];
  }
};

const sleep = timeInMS => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMS);
  })
);

const swap = (arr, outerLoopIndex, innerLoopIndex) => {
  const temp = arr[outerLoopIndex];
  arr[outerLoopIndex] = arr[innerLoopIndex];
  arr[innerLoopIndex] = temp;

  const outerLoopElement = document.querySelector(`[data-id="${outerLoopIndex}"]`);
  const outerLoopElementHeight = arr[outerLoopIndex];
  setHeight(outerLoopElement, outerLoopElementHeight);


  const innerLoopElement = document.querySelector(`[data-id="${innerLoopIndex}"]`);
  const innerLoopElementHeight = arr[innerLoopIndex];
  setHeight(innerLoopElement, innerLoopElementHeight);
};

const selectionSort = async (towerArray) => {
  for (let outerLoopIndex = 0; outerLoopIndex < (numberOfTowers - 1); outerLoopIndex += 1) {
    let minHeight = towerArray[outerLoopIndex];
    let minHeightIndex = outerLoopIndex;
    for (let innerLoopIndex = (outerLoopIndex + 1); innerLoopIndex < numberOfTowers; innerLoopIndex += 1) {
      if (towerArray[innerLoopIndex] < minHeight) {
        await sleep(speed);
        minHeight = towerArray[innerLoopIndex];
        minHeightIndex = innerLoopIndex;
      }
    }
    swap(towerArray, outerLoopIndex, minHeightIndex);
  }
};

/* Execution starts here */
createHTMLElements(numberOfTowers);

const towerArray = init();

const heightsArray = getRandomValuesArray(numberOfTowers);
setTowerHeights(towerArray, heightsArray);
manipulateDOMTowers(towerArray);

selectionSort(towerArray);



