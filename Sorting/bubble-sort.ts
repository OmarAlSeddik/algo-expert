const bubbleSort = (array: number[]) => {
  let isSorted: boolean;
  do {
    isSorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        isSorted = false;
      }
    }
  } while (!isSorted);
  return array;
};
// Time Complexity: O(n^2)
// Space Complexity: O(1)
