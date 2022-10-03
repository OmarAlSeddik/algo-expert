type Rng = [number, number];

const searchInSortedMatrix = (matrix: number[][], target: number): Rng => {
  let i = 0;
  let j = matrix[i].length - 1;
  while (i < matrix.length && j > -1) {
    if (matrix[i][j] === target) return [i, j];
    matrix[i][j] > target ? j-- : i++;
  }
  return [-1, -1];
};
