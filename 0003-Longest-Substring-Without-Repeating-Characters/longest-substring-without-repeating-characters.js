/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0; // 左指標
  let right = 0; // 右指標
  let maxLength = 0; // 暫存字串最長的長度
  let charSet = new Set(); // 用來暫存最長字串的字符

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      // 如果暫存字串中沒有重複字符，則將右指針右移
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      // 如果暫存字串中有重複字符，則將左指針右移
      charSet.delete(s[left]);
      left++;
    }
  }
  return maxLength;
};