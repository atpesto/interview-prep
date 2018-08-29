const companyBotStrategy = (trainingData) => {
  const trainingDataLength = trainingData.length;

  let index = 0;

  let avgAnswerTime = 0
  let count = 0;
  while(index < trainingDataLength) {
    const [answerTime, correctness] = trainingData[index];

    if (correctness === 1) {
      avgAnswerTime = ((avgAnswerTime * count) + answerTime) / (count + 1);
      count += 1;
    }
    index += 1;
  }

  return avgAnswerTime;
}