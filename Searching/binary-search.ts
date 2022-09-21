const binarySearch = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;
    if (array[middle] < target) left = middle + 1;
    if (array[middle] > target) right = middle - 1;
  }
  return -1;
};
// Time Complexity: O(log(n))
// Space Complexity: O(1)
