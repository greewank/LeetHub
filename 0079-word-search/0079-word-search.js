/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //little complex than other backtracking problems
    let result = false;
    
    const check = (r, c, i)=>{
        if(!result){
            if(r<0 || c<0 || r>=board.length || c>=board[0].length) return;
            if (board[r][c] != word[i]) return;
            if(i === word.length - 1){
                result = true;
                return;
            }
            board[r][c]= null; // mark our path so we dont go back and forth
            
            check(r+1, c, i+1)
            check(r-1, c, i+1)
            check(r, c+1, i+1)
            check(r, c-1, i+1)
            board[r][c]=word[i]; //reset our board
        }
    };
    
    for(let i = 0; i<board.length; i++){
        for(let j =0; j<board[i].length; j++){
            if(board[i][j]===word[0]){
                check(i,j,0);
                if(result) return result;
            }
        }
    }
    
    return result;
 };