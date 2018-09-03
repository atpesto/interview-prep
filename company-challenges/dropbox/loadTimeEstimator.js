const isUploadingDone = (arr) => (
  arr.every((remaining) => remaining === 0 ? true : false)
);

const changeUploadState = (uploadRemaining, uploadingState, v) => {
  let effectiveUploadingSpeed = v;
  let uploadingDevicesCount = 0;

  uploadingState.forEach((state) => {
    if (state === 1) {
      uploadingDevicesCount += 1;
    }
  });

  if (uploadingDevicesCount === 0) {
    return {
      transformedUploadRemaining: uploadRemaining,
      done: [],
    }
  }

  effectiveUploadingSpeed = v / uploadingDevicesCount;

  const done = [];
  const transformedUploadRemaining = uploadRemaining.map((remainingTime, index) => {
    if (uploadingState[index] === 1) {
      if (remainingTime <= effectiveUploadingSpeed) {
        done.push(index);
        return 0;
      }
      return (remainingTime - effectiveUploadingSpeed);
    }
    return remainingTime;
  });

  return {
    transformedUploadRemaining,
    done,
  }
};


const loadTimeEstimator = (sizes, uploadingStart, v) => {
  const minUploadingStartTime = Math.min(...uploadingStart);
  let uploadingTime = minUploadingStartTime;

  let uploadRemaining = sizes;
  let completionTime = [];

  while (isUploadingDone(uploadRemaining) !== true) {
    const uploadingState = uploadingStart.map((startTime, index) => {
      const remainingUploadAtIndex = uploadRemaining[index];
      if (uploadingTime >= startTime && remainingUploadAtIndex > 0) {
        return 1;
      }
      return 0;
    });

    const {
      transformedUploadRemaining,
      done,
    } = changeUploadState(uploadRemaining, uploadingState, v);
    uploadingTime += 1;

    done.forEach((arrIndex) => {
      completionTime[arrIndex] = uploadingTime;
    })

    uploadRemaining = transformedUploadRemaining;
    console.log(transformedUploadRemaining, uploadingTime, done);
  }

  return completionTime;
};


const sizes = [12, 17, 2, 27, 23];
const uploadingStart = [2, 5, 8, 6, 2];
const v = 9;

console.log(loadTimeEstimator(sizes, uploadingStart, v));
