/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next) // 
 * }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const nodeHead = new ListNode(0); // 創建一個暫時的node作為串列的起始點
  let current = nodeHead; // 用於遍歷link list
  let carry = 0; // 用來處理進位值

  // 遍歷兩個link list，直到兩者都為空且進位為0
  while (l1 !== null || l2 !== null || carry > 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // 將兩個link list對應的數字和進位相加
    const sum = val1 + val2 + carry;

    // 計算進位
    carry = Math.floor(sum / 10);

    // 創建新節點，表示當前位的數字
    const newNode = new ListNode(sum % 10);

    // 將新節點連接到結果link list中
    current.next = newNode;

    // 將 current 移動到下一個節點
    current = current.next;

    // 將兩個link list指向下一個節點
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  // 回傳執行結果
  return nodeHead.next;
};
