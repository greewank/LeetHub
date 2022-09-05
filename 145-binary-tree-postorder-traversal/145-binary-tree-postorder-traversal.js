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
var postorderTraversal = function(root) {
    let arr1 = [];
    post(root);
    function post(root){
        if(!root)
            return null;
        post(root.left);
        post(root.right);
        arr1.push(root.val);
    }
    return arr1;
};