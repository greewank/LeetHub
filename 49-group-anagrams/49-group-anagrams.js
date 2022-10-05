/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let thanksGod = strs.map(str => str.split("").sort().join());
    let hash = {};
    for(let i =0; i<strs.length; i++){
        if(!hash[thanksGod[i]]){
            hash[thanksGod[i]] = [strs[i]];
        }else{
            hash[thanksGod[i]].push(strs[i]);
        }
    }
    return Object.values(hash);
};