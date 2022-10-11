/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i = 0; i<9; i++){
    let row = new Set();
    let column = new Set();
    let square = new Set();
     for(let j = 0; j<9; j++){
        let _row = board[i][j];
        let _column = board[j][i];
        let _square = board[3*Math.floor(i/3)+Math.floor(j/3)] [3*Math.floor(i%3)+(j%3)];
        if(_row !== "."){
            if (row.has(_row)) return false;
            row.add(_row);
        }
        if(_column !== "."){
            if(column.has(_column)) return false;
            column.add(_column);
        }
        if(_square !== "."){
            if(square.has(_square)) return false;
            square.add(_square);
        }
     }
  }
  return true;
};