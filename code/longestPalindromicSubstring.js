//Question
//Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  if (!s || !s.length) return "";
  let length = s.length;
  let start = 0;
  let end = 0;
  for (let i = 0; i < length; i++) {
    const currentLongest = end - start + 1;
    if (length - i < currentLongest) break;
    let mainStr = s[i];
    for (let j = length; j >= i + currentLongest; j--) {
      let secondaryStr = s[j];
      if (mainStr === secondaryStr) {
        const isReveresed = reverseCheck(s, i, j);
        if (isReveresed) {
          start = i;
          end = j;
          break;
        }
      }
    }
  }
  return s.substring(start, end + 1);
}

/**
 *
 * @param {string} s
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
function reverseCheck(s, start, end) {
  let reverseIndex = end;
  for (let i = start; i < (end - start) / 2 + start; i++) {
    const currentStr = s[i];
    const reverseStr = s[reverseIndex];
    if (currentStr !== reverseStr) return false;
    reverseIndex--;
  }
  return true;
}
