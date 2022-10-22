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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let final = [];
    while(queue.length !== 0){
        let queueLength = queue.length;
        const currLevel = [];
        for(let i = 0; i<queueLength; i++){
            let current = queue.shift();
            if(current.left){
                 queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
            currLevel.push(current.val);
        }
        final.push(currLevel);
    }
    return final;
};