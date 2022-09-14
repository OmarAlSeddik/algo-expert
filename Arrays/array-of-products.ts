const arrayOfProducts = (array: number[]) => {
  const leftArray = new Array(array.length).fill(1);
  const rightArray = new Array(array.length).fill(1);
  const totalArray = new Array(array.length).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftArray[i] = leftProduct;
    leftProduct *= array[i];
  }
  for (let i = array.length - 1; i > -1; i--) {
    rightArray[i] = rightProduct;
    rightProduct *= array[i];
  }
  for (let i = 0; i < array.length; i++) {
    totalArray[i] = leftArray[i] * rightArray[i];
  }
  return totalArray;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
