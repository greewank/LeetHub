/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let prevNode = new ListNode();
    let dummyNode = prevNode;
    while(list1 && list2){
        if(list1.val <= list2.val){
            dummyNode.next = list1;
            dummyNode = list1;
            list1 = list1.next;
        } else{
            dummyNode.next = list2;
            dummyNode = list2;
            list2 = list2.next;
        }
    }
    if(!list1) dummyNode.next = list2;
    if(!list2) dummyNode.next = list1;
    
    return prevNode.next;
};