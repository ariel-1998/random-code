//Question
//Given a string s, find the length of the longest substring without repeating characters.

export const lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let lastDupIndex = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const currentStr = s[i];
    if (map.has(currentStr)) {
      //making sure that the lastDupIndex is the greater between those options
      //as if map value is less then lastDupIndex meaning it is not in the current substring so we can ignore it
      // that why Math.max is used, if lastDupIndex is greater that mean we are still in the streak and its not broken
      //so we dont want to change it therefore max is lastDupIndex.
      //if map value is greater it means that the current streak has come to an end
      //so we want to update the lastDupIndex to the map value
      lastDupIndex = Math.max(lastDupIndex, map.get(currentStr) + 1);
    }
    map.set(currentStr, i);
    maxLength = Math.max(maxLength, i - lastDupIndex + 1);
  }
  return maxLength;
};
