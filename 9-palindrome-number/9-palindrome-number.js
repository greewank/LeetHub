/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     Using Strings (Method 1)
    // let y = x.toString();
    // for(let i = 0; i<(y.length)+1; i++){
    //     if(y.charAt(i) != y.charAt(y.length-(i+1))){
    //         return false;
    //     }
    // }
    // return true;
    
//     Without strings (Method 2)
    if(x<0){
        return false;
    }
    let revNum = 0;
    let temp = x;
    while(temp > 0){
        let digit = temp %10;
        revNum = revNum * 10 + digit;
        temp = Math.floor(temp/10);
    }
    return (revNum === x)
}