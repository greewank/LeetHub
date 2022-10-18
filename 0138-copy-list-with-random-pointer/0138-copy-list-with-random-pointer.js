/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head){
        return null;
    }
    let oldHashMap = new Map ();
    let newOne = head;
    while(newOne){
        oldHashMap.set(newOne, new Node(newOne.val));
        newOne = newOne.next;
    }
    newOne = head;
    while(newOne){
        oldHashMap.get(newOne).next = oldHashMap.get(newOne.next) || null;
        oldHashMap.get(newOne).random = oldHashMap.get(newOne.random) || null;
        newOne = newOne.next;
    }
    return oldHashMap.get(head);
};