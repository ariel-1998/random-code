//Question
//Given a signed 32-bit integer x, return x with its digits reversed.
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const MAX_VALUE = 2 ** 31 - 1;
const MIN_VALUE = 2 ** 31 * -1;

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let reversed = 0;
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = Math.abs(x);
  }

  while (x > 0) {
    const lastDigit = x % 10;
    //im checking before adding the number because the question asked to not assign a larger number
    //so i cant assign before checking there is no overflow
    if (sign !== -1) {
      if (Math.floor(MAX_VALUE / 10) < reversed) return 0;
      if (Math.floor(MAX_VALUE / 10) === reversed && lastDigit > MAX_VALUE % 10)
        return 0;
    } else {
      if (Math.floor((MIN_VALUE * sign) / 10) < reversed) return 0;
      if (
        Math.floor((MIN_VALUE * sign) / 10) === reversed &&
        lastDigit > (MIN_VALUE * sign) % 10
      )
        return 0;
    }
    //only if conditions met append number to end
    reversed = appendDigitToNumEnd(reversed, lastDigit);
    x = Math.floor(x / 10);
  }

  return reversed * sign;
};

/**
 * @param {number} number
 * @param {number} digit
 * @return {number}
 */
function appendDigitToNumEnd(number, digit) {
  return number * 10 + digit;
}
