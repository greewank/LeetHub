/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows < 1) return [];
    if(numRows === 1) return [[1]];
    let triangle = [[1]];
    for(let i = 1; i<numRows; i++){
        let prevRow = triangle[i-1];
        let currRow = [];
        currRow.push(1);
        for(let j = 1; j<prevRow.length; j++){
            currRow[j] = prevRow[j] + prevRow[j - 1];
        }
        currRow.push(1);
        triangle.push(currRow);
    }
    return triangle;
};