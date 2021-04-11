/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  if (s1.length === 1 || s2.length === 1) {
    if (s1 !== s2) return 0;
  }
  const a = s1.split('');
  const b = s2.split('');
  const y = b.length;
  for (let i = 0; i < b.length; i++) {
    if (a.map((item) => item === b[i])) {
      b.splice(i, 1);
    }
  }
  return y - b.length;
}

module.exports = getCommonCharacterCount;
