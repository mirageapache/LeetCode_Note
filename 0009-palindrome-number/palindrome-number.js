/**
 * @param {number} x
 * @return {boolean}
 * 335ms (5.03%) | Space: 63.55MB (5.11%)
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  const arr = x.toString().split('');
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    console.log(arr[left], arr[right]);
    if(arr[left] !== arr[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/**
 * GPT提供較佳的解法
 * 每次取 x 的最後一位數字，將其加到反轉數字 reversed 的末尾
 * 然後將 x 除以 10，這樣就可以不斷反轉整數的一半。
 * 161ms (22.62%) | Space: 49.70MB (96.92%)
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
      return false;
  }

  let reversed = 0;
  while (x > reversed) {
      //在每次迭代中，將 reversed 左移一位（乘以 10）
      //然後將 x 的最後一位（x % 10）加到 reversed 的末尾。這樣就完成了一次反轉。
      reversed = reversed * 10 + x % 10;
      x = Math.floor(x / 10);
  }

  // 考慮數字位數為奇數的情況
  return x === reversed || x === Math.floor(reversed / 10);
};