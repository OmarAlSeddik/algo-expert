const longestPeak = (array: number[]) => {
  let longest = 0;
  for (let i = 1; i < array.length - 1; i++) {
    if (isPeak(array, i)) {
      const length = getPeakLength(array, i);
      if (length > longest) longest = length;
    }
  }
  return longest;
};

const isPeak = (array: number[], index: number) => {
  const prev = array[index - 1];
  const curr = array[index];
  const next = array[index + 1];
  return prev < curr && curr < next;
};

const getPeakLength = (array: number[], peakIndex: number) => {
  let length = 3;
  let prev = peakIndex - 1;
  let next = peakIndex + 1;
  while (prev > 0) {
    if (array[prev] > array[prev - 1]) {
      length++;
      prev--;
    } else break;
  }
  while (next < array.length - 1) {
    if (array[next] > array[next + 1]) {
      length++;
      next++;
    } else break;
  }
  return length;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
