const tandemBicycle = (
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
): number => {
  let solution = 0;
  fastest
    ? redShirtSpeeds.sort((a, b) => a - b)
    : redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => b - a);
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let red = redShirtSpeeds[i];
    let blue = blueShirtSpeeds[i];
    solution += red > blue ? red : blue;
  }

  return solution;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
