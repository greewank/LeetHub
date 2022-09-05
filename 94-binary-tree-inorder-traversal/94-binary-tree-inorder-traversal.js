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
var inorderTraversal = function(root) {
    let element = [];
    rooting(root);
    function rooting(root){
        if(!root){
            return null;
        }
//         So this below line what happens is, in the first recursion the root value comes in the function and it returns the left element of the tree via root.left if it exists otherwise returns root.right which is basically the right element.
        rooting(root.left);
        element.push(root.val);
        rooting(root.right);
    }
    return element;
};