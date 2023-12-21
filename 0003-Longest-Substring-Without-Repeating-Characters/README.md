# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

> Given a string `s`, find the length of the longest 
substring without repeating characters.

### Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```


## 解題概念：
目的是要找到`s`字串中`最長且字符不重複`的子字串長度，因此使用「滑動窗口（Sliding Window）」的方法解決，藉由左右兩個指標遍歷整個字串，確認子字串的最大長度。

- Time: 74ms (67.59%) | Space: 47.27MB (59.16%) | Medium
