// 1. First dumb solution come to my mind

// function isPland(str){
    
//     let reversedString = '';

//     for(let i = str.length-1; i >= 0; i-- ){
//         reversedString += str[i]
//     }
//     if(reversedString === str){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isPland("leve"))


// 2. Solution is more efficent anfd is O(3) notation
// function isPland(str){
//     str = str.toLowerCase()
//     let reversedString = str.split('').reverse().join('');
//     if(reversedString === str){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isPland("A man, a plan, a canal: Panama"))

// 3. Solution is more efficent anfd is O(3) notation

const isPalindrome = function(str) {
    let arrayformattedStr = str.replace(/[\W_]+/g, "").toLowerCase()
    if(arrayformattedStr.length == '') return true;
    let newArrayOfStr = [];
    for (let i = arrayformattedStr.length; i >= 0; i--) {
        const element = arrayformattedStr[i];
        newArrayOfStr.push(element);
    }
    if(arrayformattedStr == newArrayOfStr.join().replace(/[\W_]+/g, "")){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));