const minimumWaitingTime = (queries: number[]): number => {
  queries.sort((a, b) => a - b);
  let solution = 0;
  for (let i = 0; i < queries.length; i++) {
    let remainingElements = queries.length - 1 - i;
    solution += queries[i] * remainingElements;
  }
  return solution;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
