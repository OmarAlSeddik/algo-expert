const classPhotos = (redShirtHeights: number[], blueShirtHeights: number[]) => {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  const backIsRed = redShirtHeights[0] > blueShirtHeights[0];
  for (let i = 0; i < redShirtHeights.length; i++) {
    let red = redShirtHeights[i];
    let blue = blueShirtHeights[i];
    if (backIsRed && red <= blue) return false;
    if (!backIsRed && blue <= red) return false;
  }
  return true;
};
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
