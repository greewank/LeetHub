/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome=(start, end, s)=>{
    while(start < end){
        if(s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
};

var partition = function(s) {
    let finalArr=[];
    const dfs = (i, s, slate)=>{
        if(i===s.length){
            finalArr.push(slate.slice());
            return;
        }
        for(let j = i; j < s.length; j++){
            if(isPalindrome(i, j, s)){
                slate.push(s.slice(i, j+1));
                dfs(j+1, s, slate);
                slate.pop();
            }
        }
    }
    
    dfs(0, s, []);
    return finalArr;
};