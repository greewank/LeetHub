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
 * @return {number}
 */
var goodNodes = function(root) {
//     Use of DFS but everytime you store the max value as well. until that node.
    let result = 0;
    function dfs(node, maxVal){
        if(!node) return 0;
        
        if(node.val >= maxVal) result+=1;
        maxVal = Math.max(node.val, maxVal);
        dfs(node.left, maxVal);
        dfs(node.right, maxVal);
    }
    dfs(root, root.val);
    return result;
};