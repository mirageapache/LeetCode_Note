# [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

## 題目描述：
> Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.
The overall run time complexity should be `O(log (m+n))`.

> 給定兩個已排序的數組 `nums1` 和 `nums2`，其大小分別為 `m` 和 `n`，找到這兩個數組的**中位數**。假設兩個數組不能為空，且時間複雜度應為 O(log(min(m, n)))。

### Example 1:
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2:
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```


## 解題概念：
1. 合併數組：首先，我們可以將兩個已排序的數組合併為一個大的已排序數組。這可以在不使用額外空間的情況下進行，例如，將 nums2 合併到 nums1 的末尾。
2. 中位數定位：中位數是排序數組的中間值，對於奇數長度的數組，中位數就是中間的數字；對於偶數長度的數組，中位數是中間兩個數的平均值。
3. 二分查找：使用二分查找的思想，在合併後的數組中找到中位數的位置。對於中位數，它的左半部分應該小於等於它，而右半部分應該大於等於它。
4. 分割點定位：找到合適的分割點，使得左半部分的元素個數總和等於右半部分的元素個數。這可以通過二分查找的方法進行嘗試，並檢查分割點的左右兩側是否滿足條件。

- Time: 83ms (83.84%) | Space: 45.66MB (98.14%) | hard
