# 1. two-sum

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
> You can return the answer in any order.

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```


## 解題概念：
題目提供的nums中的某兩個數相加會等於target，因此使用for迴圈來執行兩個數的運算及比對，並設定一個"numObj"的object用來暫存比較過的陣列數值及索引(index)，直到找到相加等於target的兩個數。

- Time: 45ms (98.08%) | Space: 42.8MB (39.64%) | Easy

### LeetCode Link
- [two sum](https://leetcode.com/problems/two-sum)