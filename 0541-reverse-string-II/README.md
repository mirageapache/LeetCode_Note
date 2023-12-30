# [0541. Reverse String II](https://leetcode.com/problems/reverse-string-II/description/)

## 題目描述：

> Given a string `s` and an integer `k`, reverse the first `k` characters for every `2k` characters counting from the start of the string.
> If there are fewer than `k` characters left, reverse all of them. If there are less than `2k` but greater than or equal to `k` characters, then reverse the first `k` characters and leave the other as original.

> 給定一個字符串 s 和一個整數 k，您需要將字符串 s 的前 k 個字符進行反轉，然後將下一個 k 個字符保持原位，依此類推，直到您達到字符串的末尾。
> 這個過程將重複進行，直到您達到字符串的末尾。此時，如果剩餘字符少於 k 個，則將這些字符全部反轉。如果剩餘字符小於 k 個，但大於或等於 k 個，則反轉前 k 個字符並保持其餘字符的原位。

### Example 1:

```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

### Example 2:

```
Input: s = "abcd", k = 2
Output: "bacd"
```

## 解題概念：

1. 先將字串切分成陣列方式再執行運算
2. 找出要執行反轉的所有區間
3. 在反轉區間內使用雙指標法進行反轉運算
4. 將運算完成的陣列組合成字串並 return

- Time: 60ms (36.29%) | Space: 45.82MB (25.43%) | Easy
