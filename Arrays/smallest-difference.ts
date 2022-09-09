type Pair = [number, number];

const smallestDifference = (arrayOne: number[], arrayTwo: number[]) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let pair: Pair = [-Infinity, Infinity];
  let difference = Infinity;
  let pointerOne = 0;
  let pointerTwo = 0;
  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    const num1 = arrayOne[pointerOne];
    const num2 = arrayTwo[pointerTwo];
    const currentDifference = Math.abs(num1 - num2);
    if (currentDifference === 0) return [num1, num2];
    if (currentDifference < difference) {
      difference = currentDifference;
      pair = [num1, num2];
    }
    if (num1 < num2) pointerOne++;
    if (num1 > num2) pointerTwo++;
  }
  return pair;
};
