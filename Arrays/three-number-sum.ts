type Triplet = [number, number, number];

const threeNumberSum = (array: number[], targetSum: number): Triplet[] => {
  array.sort((a, b) => a - b);
  const outputArray: Triplet[] = [];
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      const sum = array[i] + array[leftPointer] + array[rightPointer];
      if (sum > targetSum) rightPointer--;
      else if (sum < targetSum) leftPointer++;
      else {
        outputArray.push([array[i], array[leftPointer], array[rightPointer]]);
        rightPointer--;
        leftPointer++;
      }
    }
  }
  return outputArray;
};
// Time Complexity: O(n^2)
// Space Complexity: O(n)
