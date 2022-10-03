type SpecialArray = Array<number | SpecialArray>;

function productSum(array: SpecialArray, mult: number = 1) {
  let sum = 0;
  for (const value of array) {
    if (typeof value === "number") sum += value;
    else sum += productSum(value, mult + 1);
  }
  return sum * mult;
}
// Time Complexity: O(n)
// Space Complexity: O(n)
