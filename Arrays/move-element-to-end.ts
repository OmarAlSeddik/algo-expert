const moveElementToEnd = (array: number[], toMove: number) => {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) {
      array[i] = array[j];
      array[j] = toMove;
    }
    i++;
  }
  return array;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
