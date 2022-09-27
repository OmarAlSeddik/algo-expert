interface Pairs {
  [key: number]: [number, number][];
}

const fourNumberSum = (array: number[], targetSum: number) => {
  const pairSums: Pairs = {};
  const quadruplets: number[][] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const delta = targetSum - currentSum;
      if (delta in pairSums) {
        for (const pair of pairSums[delta]) {
          quadruplets.push(pair.concat(array[i], array[j]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in pairSums)) {
        pairSums[currentSum] = [[array[i], array[k]]];
      } else {
        pairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
};
