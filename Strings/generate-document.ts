const generateDocument = (characters: string, document: string) => {
  if (document.length > characters.length) return false;
  let hashTable: { [key: string]: number } = {};
  for (let i = 0; i < characters.length; i++) {
    const letter = characters[i];
    hashTable[letter] ? hashTable[letter]++ : (hashTable[letter] = 1);
  }
  for (let i = 0; i < document.length; i++) {
    const letter = document[i];
    if (!hashTable[letter] || hashTable[letter] < 1) return false;
    hashTable[letter]--;
  }
  return true;
};
// Time Complexity: O(n)
// Space Complexity: O(n)
