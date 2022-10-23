/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
//     using queue data structure
    if(!root) return [];
    let final = [];
    let queue = [root];
    while(queue.length){
        let queueLength = queue.length;
        final.push(queue[queueLength-1].val);
        for(let i = 0; i<queueLength; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return final;
};