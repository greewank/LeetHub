/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        if(strs.length === 1) return [strs];
     let map = new Map();
    for (let str of strs){
        let sorted = (Array.from(str).sort()).join("");
        if(!map.has(sorted)) map.set(sorted, [str]);
        else map.get(sorted).push(str);
    }
    return [...map.values()];
};