const firstNonRepeatingCharacter = (string: string) => {
  const hashTable: { [key: string]: number } = {};
  for (const character of string) {
    hashTable[character] ? hashTable[character]++ : (hashTable[character] = 1);
  }
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (hashTable[character] === 1) return i;
  }
  return -1;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
