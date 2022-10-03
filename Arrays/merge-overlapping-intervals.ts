const mergeOverlappingIntervals = (array: number[][]): number[][] => {
  array.sort((a, b) => a[0] - b[0]);
  const solution: number[][] = [];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const prev = solution[solution.length - 1];
    if (i === 0 || curr[0] > prev[1]) solution.push(curr);
    else solution[solution.length - 1][1] = Math.max(curr[1], prev[1]);
  }
  return solution;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(n)
