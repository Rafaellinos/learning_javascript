/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let ls = 0, pairs = 0;
    for (const letter of s.split("").reverse()) {
        if (letter == 'L') {
            ls++;
        } else if (letter == 'R') {
            ls--;
        }
        if (ls == 0) pairs++;
        
    }
    return pairs;
};

console.log(balancedStringSplit('RLRRRLLRLL'));