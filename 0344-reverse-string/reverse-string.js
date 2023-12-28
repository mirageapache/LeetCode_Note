/**
 * @param {character[]} s
 * 解法一
 * reverse() 函式
 * Time: 126ms | Space: 49.86MB
 */
var reverseString = function(s) {
    s.reverse();
};

/**
 * @param {character[]} s
 * 解法二
 * 雙指標法
 * Time: 87ms | Space: 49.41MB
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

/**
 * @param {character[]} s
 * 解法三
 * 前後對換概念
 * Time: 126ms | Space: 48.9MB
 */
var reverseString = function(s) {
    const len = s.length;
    for(let i = 0; i < len / 2; i++){
        const temp = s[i];
        s[i] = s[len-i-1];
        s[len-i-1] = temp;
    }
};