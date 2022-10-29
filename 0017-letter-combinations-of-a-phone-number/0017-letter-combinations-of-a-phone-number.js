/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    let hashMap = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz",
    };
    let finalArr=[];
    
    const dfs = (i, digits, slate) =>{
        //base case
        if(i === digits.length){
            finalArr.push(slate.join(""));
            return;
        }
        
        let elements = hashMap[digits[i]];
        
        for(let element of elements){
            slate.push(element);
            dfs(i+1, digits, slate);
            slate.pop();
        }
    }
    
    dfs(0, digits, []);
    return finalArr;
};