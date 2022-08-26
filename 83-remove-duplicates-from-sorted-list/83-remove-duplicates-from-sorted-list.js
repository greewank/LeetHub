/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dum = new ListNode(-Infinity);
    dum.next = head;
    let pointer = dum;
    let current = head;
    while(current){
        if(pointer.val === current.val){
            while(current && pointer.val === current.val){
                current = current.next;
            }
            pointer.next = current;
        } else{
            pointer = current;
            current = current.next;
        }
    }
    return dum.next;
};