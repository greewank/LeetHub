/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i =0; i<9; i++){
        let rowSet = new Set();
        let columnSet = new Set();
        let squareSet = new Set();
            for(let j = 0; j<9; j++){
                let _row = board[i][j];
                let _column = board[j][i];
                let _square = board [3*Math.floor(i/3)+Math.floor(j/3)][3*Math.floor(i%3)+(j%3)];
                if(_row!=(".")){
                    if(rowSet.has(_row)) return false;
                    rowSet.add(_row);
                }
                if(_column!=(".")){
                    if(columnSet.has(_column)) return false;
                    columnSet.add(_column);
                }
                if(_square!="."){
                    if(squareSet.has(_square)) return false;
                    squareSet.add(_square);
                }
            }
    }
    return true;
    
};