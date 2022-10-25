/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
//     Preorder always has first element as root. So, use that and create a hashmap
// using inorder. The first recursion is for the elements before root (left) in 
    // INORDER and the second is for right side .
    let hashMap = {};
    inorder.forEach((el, i)=> hashMap[el] = i);
    function traversing(start, end){
        if(start > end) return null;
        let root = new TreeNode(preorder.shift());
        root.left = traversing(start, hashMap[root.val]-1);
        root.right = traversing(hashMap[root.val]+1, end);
        return root;
    }
    return traversing(0, inorder.length-1);
};