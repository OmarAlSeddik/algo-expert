const findThreeLargestNumbers = (array: number[]) => {
  const outputArray: number[] = [-Infinity, -Infinity, -Infinity];
  for (const number of array) {
    if (number > outputArray[2]) {
      outputArray[0] = outputArray[1];
      outputArray[1] = outputArray[2];
      outputArray[2] = number;
    } else if (number > outputArray[1]) {
      outputArray[0] = outputArray[1];
      outputArray[1] = number;
    } else if (number > outputArray[0]) {
      outputArray[0] = number;
    }
  }
  return outputArray;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
