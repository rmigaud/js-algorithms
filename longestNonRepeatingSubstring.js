const findLongestNonRepeatingSubstring = (s) => {
  if (s == null || s.length == 0) return 0;

  let set = [];
  const input = s.split("");

  let max = 0;

  if (input.length < 2) {
    return input.length;
  }

  for (let j = 0; j < input.length; j++) {
    for (let i = j; i < input.length; i++) {
      if (!addToSet(set, input[i])) {
        if (set.length > max) {
          max = set.length;
        }
        set = [];
        break;
      }
    }
    if (set.length > max) {
      max = set.length;
    }
  }
  return max;
};

const addToSet = (set, input) => {
  if (set.includes(input)) {
    return false;
  } else {
    set.push(input);
    return true;
  }
};

console.log(findLongestNonRepeatingSubstring("abcabcbb") === 3); // 3
console.log(findLongestNonRepeatingSubstring("bbbbb") === 1); // 1
console.log(findLongestNonRepeatingSubstring("pwwkew") === 3); // 3
console.log(findLongestNonRepeatingSubstring("au") === 2); // 2
console.log(findLongestNonRepeatingSubstring("dvdf") === 3); // 3
console.log(findLongestNonRepeatingSubstring("jbpnbwwd") === 4); // 4
console.log(findLongestNonRepeatingSubstring("gsqygebs") === 6); // 6
