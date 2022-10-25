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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //going for recursive call instead of the iterative that was shown.
    let n = 0;
    let result;
    function dfs(root){
        if(!root) return;
        dfs(root.left);
        if(n++ < k) result = root.val;
        dfs(root.right);
    }
    dfs(root);
    return result;
};
         