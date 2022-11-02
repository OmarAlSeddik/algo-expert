const taskAssignment = (k: number, tasks: number[]) => {
  let solution: number[][] = [];
  const newTasks = tasks.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);
  let left = 0;
  let right = tasks.length - 1;
  while (left < right) {
    solution.push([newTasks[left][1], newTasks[right][1]]);
    left++;
    right--;
  }
  return solution;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(n)