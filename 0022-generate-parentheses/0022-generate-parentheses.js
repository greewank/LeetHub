/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    // Using backtracking and DFS So in this case, once one branch is done it goes 
//     to other branch like in DFS.
    let result = [];
    const backtracking = (l , r, s) =>{
        if(l < r) return; //base case because left is opening parentheses
        
        if(l === n && r === n){
            result.push(s);
            return;
        }
        if(l<n) backtracking(l+1, r, s +'(');
        if(r<n) backtracking(l, r+1, s+')');
    }
    
    backtracking(0, 0, "");
    return result;
};