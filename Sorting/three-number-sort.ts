const threeNumberSort = (array: number[], order: number[]): number[] => {
  let left = 0;
  let mid = 0;
  let right = array.length - 1;
  while (mid <= right) {
    if (array[mid] === order[1]) mid++;
    else if (array[mid] === order[0]) {
      let temp = array[left];
      array[left] = array[mid];
      array[mid] = temp;
      left++;
      mid++;
    } else if (array[mid] === order[2]) {
      let temp = array[right];
      array[right] = array[mid];
      array[mid] = temp;
      right--;
    }
  }
  return array;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
