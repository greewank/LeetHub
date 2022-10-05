/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let thanksGod = strs.map(str => str.split("").sort().join());
    let hash = {};
    //     So we sort the original array and create a hash. 
    // In the hash we compare the sorted value as 
    //     key with the original array as value and push new ones.
    for(let i =0; i<strs.length; i++){
        if(!hash[thanksGod[i]]){
            hash[thanksGod[i]] = [strs[i]];
        }else{
            hash[thanksGod[i]].push(strs[i]);
        }
    }
    //     Object.values returns an ARRAY of object's values (so from that key value pair)
    return Object.values(hash);
};