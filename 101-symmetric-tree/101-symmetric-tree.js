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
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    return checking(root.left, root.right);
    function checking(left, right){
        if(!right && !left) return true;
        if(!right || !left || right.val !== left.val) return false;
        return checking(left.left, right.right) && checking(left.right, right.left);
    }
};