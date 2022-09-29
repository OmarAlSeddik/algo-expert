const firstDuplicateValue = (array: number[]) => {
  let hashTable: { [key: number]: boolean } = {};
  for (const number of array) {
    if (!hashTable[number]) hashTable[number] = true;
    else return number;
  }
  return -1;
};
// Time Complexity: O(n)
// Space Complexity: O(n)

const firstDuplicateValue2 = (array: number[]) => {
  for (const number of array) {
    let targetIndex = Math.abs(number) - 1;
    if (array[targetIndex] > -1) array[targetIndex] = -array[targetIndex];
    else return Math.abs(number);
  }
  return -1;
};
// Optimal solution if array can be mutated and doesn't contain any negative numbers.
// Time Complexity: O(n)
// Space Complexity: O(1)
