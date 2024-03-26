//Question
//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this
//P   A   H   N
//A P L S I I G
//Y   I   R
//And then read line by line: "PAHNAPLSIIGYIR"
//Write the code that will take a string and make this conversion given a number of rows

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const length = s.length;
  let rows = Array.from({ length: numRows }, () => "");
  let currentRow = 1;
  const isStaticRow = numRows === 1;
  const staticRow = 0;
  const nextRow = isStaticRow ? staticRow : 1;
  const prevRow = isStaticRow ? staticRow : -1;
  let direction = nextRow;
  for (let i = 0; i < length; i++) {
    rows[currentRow - 1] += s[i];
    if (currentRow + direction > numRows) direction = prevRow;
    if (currentRow + direction < 1) direction = nextRow;
    currentRow += direction;
  }
  return rows.join("");
};
