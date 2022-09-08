const isValidSubsequence = (array: number[], sequence: number[]) => {
  let sequenceIndex = 0;
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number === sequence[sequenceIndex]) sequenceIndex++;
    if (sequenceIndex === sequence.length) return true;
  }
  return false;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
