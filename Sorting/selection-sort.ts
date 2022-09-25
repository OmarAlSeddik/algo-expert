const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) smallestIndex = j;
    }
    let temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }
  return array;
};
// Time Complexity: O(n^2)
// Space Complexity: O(1)
