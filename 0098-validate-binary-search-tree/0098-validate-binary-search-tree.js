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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function dfs(root, left, right){
        if(!root) return true;
        if (!(root.val < right && root.val > left)){
            return false;
        }
        return (dfs(root.left, left, root.val) && dfs(root.right, root.val, right));
    }
    return dfs(root, -Infinity, Infinity);
};