var reverseStr = function(s, k) {
    // 將字符串轉換為陣列，方便操作
    const chars = s.split('');
    const len = chars.length;

    // 遍歷字符串，每次處理 2k 個字符(跳過不執行的字符串)
    for (let i = 0; i < len; i += 2 * k) {
        // 確保不越界，計算反轉的起始索引
        let start = i;
        let end = Math.min(i + k - 1, len - 1); // 確保不越界，計算反轉的結束索引（不超過字符串長度）

        // 反轉 [start, end] 區間的字符
        while (start < end) {
            [chars[start], chars[end]] = [chars[end], chars[start]];
            start++;
            end--;
        }
    }

    // 將反轉後的字符陣列組合成字符串
    return chars.join('');
};

