const largestRange = (array: number[]): [number, number] => {
  const hashTable: { [key: number]: boolean } = {};
  const range: [number, number] = [array[0], array[0]];
  for (let i = 0; i < array.length; i++) {
    if (!hashTable.hasOwnProperty(array[i])) hashTable[array[i]] = true;
  }
  for (let i = 0; i < array.length; i++) {
    if (hashTable[array[i]]) {
      hashTable[array[i]] = false;
      let minRange = array[i];
      let maxRange = array[i];
      while (hashTable[minRange - 1]) {
        minRange -= 1;
        hashTable[minRange] = false;
      }
      while (hashTable[maxRange + 1]) {
        maxRange += 1;
        hashTable[maxRange] = false;
      }
      if (maxRange - minRange > range[1] - range[0]) {
        range[1] = maxRange;
        range[0] = minRange;
      }
    }
  }
  return range;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
