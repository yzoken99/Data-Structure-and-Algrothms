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
function isPland(str){
    str = str.toLowerCase()
    let reversedString = str.split('').reverse().join('');
    if(reversedString === str){
        return true
    }else{
        return false
    }
}
console.log(isPland("Level"))