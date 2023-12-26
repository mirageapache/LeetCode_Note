/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1]; // 確保 nums1 是較短的數組
    }
  
    const m = nums1.length;
    const n = nums2.length;
    const totalLen = m + n;
  
    let left = 0;
    let right = m;
  
    while (left <= right) {
      const partitionX = Math.floor((left + right) / 2);
      const partitionY = Math.floor((totalLen + 1) / 2) - partitionX;
  
      const maxX = partitionX > 0 ? nums1[partitionX - 1] : Number.NEGATIVE_INFINITY;
      const minX = partitionX < m ? nums1[partitionX] : Number.POSITIVE_INFINITY;
  
      const maxY = partitionY > 0 ? nums2[partitionY - 1] : Number.NEGATIVE_INFINITY;
      const minY = partitionY < n ? nums2[partitionY] : Number.POSITIVE_INFINITY;
  
      if (maxX <= minY && maxY <= minX) {
        // 找到了正確的分割點
        if (totalLen % 2 === 0) {
          // 如果數組總長度為偶數
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else {
          // 如果數組總長度為奇數
          return Math.max(maxX, maxY);
        }
      } else if (maxX > minY) {
        // 調整分割點
        right = partitionX - 1;
      } else {
        // 調整分割點
        left = partitionX + 1;
      }
    }
  };
  