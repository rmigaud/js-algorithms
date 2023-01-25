// O(n)
const isAnagram = (firstStr, secondStr) => {
  if (firstStr.length != secondStr.length) return false;
  const frequencyOf = {};

  for (const letter of firstStr) {
    if (frequencyOf[letter] != null) {
      frequencyOf[letter]++;
    } else {
      frequencyOf[letter] = 1;
    }
  }

  for (const letter of secondStr) {
    if (frequencyOf[letter] != null) {
      frequencyOf[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
