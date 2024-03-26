//Question
//Given an integer x, return true if x is a palindrome, and false otherwise.
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  let str = x.toString();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
};
