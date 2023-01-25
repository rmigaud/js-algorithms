// O(n)
const frequencyCounter = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  let histogram1 = newHistogram(arr1);
  let histogram2 = newHistogram(arr2);

  for (let count in histogram1) {
    if (!(count in histogram2)) {
      return false;
    } else {
      if (histogram2[count] != histogram1[count]) {
        return false;
      }
    }
  }
  return true;
};

const newHistogram = (arr1) => {
  let histogram = {};
  for (let elm of arr1) {
    if (histogram.hasOwnProperty(elm)) {
      histogram[elm] += 1;
    } else {
      histogram[elm] = 1;
    }
  }
  return histogram;
};

frequencyCounter("hello", "olleh"); // true
