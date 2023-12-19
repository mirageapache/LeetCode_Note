/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 創建一個物件 numObj 來儲存數字與其索引的對應關係
    const numObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]; // 取得當前位置的數字
        const complement = target - number; // 計算補數，即目標值減去當前數字
        
        // 檢查補數是否存在於 numObj 中，如果存在，則找到答案
        if (complement in numObj) {
            return [numObj[complement], i]; // 返回兩個數字的索引
        }
        
        numObj[number] = i; // 將當前數字及其索引存入 numObj 中
    }
    
    // 如果沒有找到符合條件的數字組合，返回空陣列
    return [];
};