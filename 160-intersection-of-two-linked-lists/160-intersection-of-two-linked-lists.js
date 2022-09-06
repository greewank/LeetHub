/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let ptr1 = headA;
    let ptr2 = headB;
    while(ptr1 !== ptr2){
        if(ptr1 == null){
            ptr1 = headB;
        }else{
            ptr1 = ptr1.next;
        }
        if(ptr2 == null){
            ptr2 = headA;
        }else{
            ptr2 = ptr2.next;
        }
    }
    return ptr1;
};