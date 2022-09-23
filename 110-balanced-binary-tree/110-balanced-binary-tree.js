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
var isBalanced = function(root) {
    let ans = true;
    function rooting(root){
        if(!root){
            return 0;
        }
        let left = rooting(root.left);
        let right = rooting(root.right);
        
        if((Math.abs(left-right)) > 1){
            ans = false;
        }
        return (Math.max(left + 1, right + 1));
    }
    rooting(root);
    return ans;
};