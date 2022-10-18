/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(-Infinity);
    dummyNode.next = head;
    let resultHead = dummyNode;
    let tail = head;
    let count = 0;
    while(count < n){
        count++;
        tail = tail.next;
    }
    let removeNode = head;
    let prevNode = dummyNode;
    while(tail){
        removeNode = removeNode.next;
        prevNode = prevNode.next;
        tail = tail.next;
    }
    prevNode.next = removeNode.next;
    return resultHead.next;
};