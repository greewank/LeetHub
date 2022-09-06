/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return createTree(nums,0,nums.length-1);
};


var createTree = function(nums, start, end){
    // base case :
    if(start == end) return new TreeNode(nums[start]);
    if(start > end) return null;
    
    // create the node :
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    
    // find the children of the node :
    node.left = createTree(nums, start, mid-1);
    node.right = createTree(nums, mid+1, end);
    
    // return the node with its childern :
    return node;
};
