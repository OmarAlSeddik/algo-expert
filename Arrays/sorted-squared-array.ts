const sortedSquaredArray = (array: number[]) => {
  let startPointer = 0;
  let endPointer = array.length - 1;
  const outputArray = new Array(array.length - 1).fill(0);
  for (let i = array.length - 1; i >= 0; i--) {
    const num1 = array[startPointer] ** 2;
    const num2 = array[endPointer] ** 2;
    if (num1 > num2) {
      outputArray[i] = num1;
      startPointer++;
    } else {
      outputArray[i] = num2;
      endPointer--;
    }
  }
  return outputArray;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
