const runLengthEncoding = (string: string) => {
  let count = 1;
  const encoded: string[] = [];
  for (let i = 1; i < string.length; i++) {
    const curr = string[i];
    const prev = string[i - 1];
    if (curr !== prev || count === 9) {
      encoded.push(`${count}${prev}`);
      count = 0;
    }
    count++;
  }
  encoded.push(`${count}${string[string.length - 1]}`);
  return encoded.join("");
};
// Time Complexity: O(n)
// Space Complexity: O(n)
