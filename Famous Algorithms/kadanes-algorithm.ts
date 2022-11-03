const kadanesAlgorithm = (array: number[]) => {
  let max = array[0];
  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    const number = array[i];
    currentMax = number > currentMax + number ? number : currentMax + number;
    if (currentMax > max) max = currentMax;
  }
  return max;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
