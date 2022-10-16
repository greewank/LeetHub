/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//     This is actually not a binary search algorithm solution (should use that but i couldn't)
//     time complexity : O(m+n)
    if(!matrix.length || !matrix[0].length) return false;
    let row = 0;
    let column = matrix[0].length - 1;
    while(column>=0 && row<=matrix.length - 1){
          if(matrix[row][column] === target) return true;
          else if(matrix[row][column] > target) column--;
          else if(matrix[row][column] < target) row++;  
    }
    return false;
};