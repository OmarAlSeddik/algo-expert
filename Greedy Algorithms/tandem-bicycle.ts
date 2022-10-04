const tandemBicycle = (
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
): number => {
  redShirtSpeeds.sort((a, b) => (fastest ? a - b : b - a));
  blueShirtSpeeds.sort((a, b) => b - a);
  let solution = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let red = redShirtSpeeds[i];
    let blue = blueShirtSpeeds[i];
    solution += Math.max(red, blue);
  }

  return solution;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
