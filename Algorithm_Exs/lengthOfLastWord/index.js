const lengthOfLastWord = function(s) {
    let str = s.replace(/\s+/g, ' ').trim().split(" ")
    const element = str[str.length-1];
    return element.length
};
console.log(lengthOfLastWord("luffy is still joyboy"))