// Optimal Solution 1 //
const twoNumberSum = (array: number[], targetSum: number) => {
  const numHash: { [key: number]: boolean } = {};
  for (const num of array) {
    let complement = targetSum - num;
    if (complement in numHash) return [num, complement];
    else numHash[num] = true;
  }
  return [];
};
// Time Complexity: O(n)
// Space Complexity: O(n)

// Optimal Solution 2 //
const twoNumberSum2 = (array: number[], targetSum: number) => {
  array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    if (array[leftPointer] + array[rightPointer] < targetSum) {
      leftPointer++;
    } else if (array[leftPointer] + array[rightPointer] > targetSum) {
      rightPointer--;
    } else return [array[leftPointer], array[rightPointer]];
  }
  return [];
};
// Time Complexity: O(nlog(n))
// Space Complexity: O(1)
