const isMonotonic = (array: number[]) => {
  if (array.length < 2) return true;
  let increasing: any = undefined;
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      switch (increasing) {
        case true: {
          if (array[i] < array[i - 1]) return false;
          break;
        }
        case false: {
          if (array[i] > array[i - 1]) return false;
        }
        default: {
          if (array[i] > array[i - 1]) increasing = true;
          if (array[i] < array[i - 1]) increasing = false;
        }
      }
    }
  }
  return true;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
