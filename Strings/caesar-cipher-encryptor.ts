const caesarCipherEncryptor = (string: string, key: number) => {
  const encrypted: string[] = [];
  const newKey = key % 26;
  for (const character of string) {
    const code = character.charCodeAt(0) + newKey;
    const shiftedCharacter =
      code > 122 ? String.fromCharCode(code - 26) : String.fromCharCode(code);
    encrypted.push(shiftedCharacter);
  }
  return encrypted.join("");
};
// Time Complexity: O(n)
// Space Complexity: O(n)
