/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const k = n.toString().split('');
  const a = k.indexOf(Math.min(...k).toString());
  k.splice(a, 1);
  return k.join('') * 1;
}

module.exports = deleteDigit;
