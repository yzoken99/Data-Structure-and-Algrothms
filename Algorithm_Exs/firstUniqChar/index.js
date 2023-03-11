const firstUniqChar = function(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i] 
        obj[char] = obj[char] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(obj[char] === 1) return i;
        
    }
    return -1
};
console.log(firstUniqChar("loveleetcode"))