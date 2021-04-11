/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString().split('');
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i] * 1;
  }
  const newArr = x.toString().split('');
  if (newArr.length !== 1) {
    let y = 0;
    for (let j = 0; j < arr.length; j++) {
      y += newArr[j] * 1;
    }
    return y;
  }
  return x;
}

module.exports = getSumOfDigits;
