const validStartingCity = (
  distances: number[],
  fuel: number[],
  mpg: number
): number => {
  let solution = 0;
  let lowestFuel = 0;
  let currentFuel = 0;
  for (let i = 1; i < distances.length; i++) {
    currentFuel += mpg * fuel[i - 1] - distances[i - 1];
    if (currentFuel < lowestFuel) {
      lowestFuel = currentFuel;
      solution = i;
    }
  }
  return solution;
};
