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
var maxDepth = function(root) {
    function rooting(root){
        if(!root)
            return 0;
        let left = rooting(root.left);
        let right = rooting(root.right);
        let maxi = Math.max(left, right) + 1;
        return maxi;
    }
    return rooting(root);
};