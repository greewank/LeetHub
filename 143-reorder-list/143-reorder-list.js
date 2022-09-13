/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let prev = null;
    let curr = slow;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr; 
        curr = next; 
    }
    
    let first = head;
    let second = prev;
    while(second.next){
        let temp = first.next;
        first.next = second;
        first = temp;
        
        temp = second.next;
        second.next = first;
        second = temp;
    }
};