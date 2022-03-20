// function myString(str1, str2){
//     for(let i = 0; i < str1.length; i++){
//         for(let j = 0; j < str1[i].length; j++){
//             for(let m = 0; m < str2.length; m++){
//                 for(let n = 0; n < str2[m].length; n++){
//                     if(str1[i].includes(str2[m][n] || str2[m].includes(str1[i][j]))){
//                         console.log("YES")
//                     }else{
//                         console.log("no")
//                     }
//                 }

//             }

//         }
//     }
    
// }
// console.log(myString(["hello", "world"], ["level", "asq"]))



// return str1.split('').reduce((acc, val)=> {
//      acc = val + acc
//      return acc
//  },'')




// function maxChar(str){
//     let charObj = {};
//     let maxChar ='';
//     let maxCount = 0;
//     for(let i = 0; i <str.length; i++){
//         const char = str[i]
//         charObj[char] = charObj[char] + 1 || 1
//         console.log("Count char",charObj)
//         if(charObj[char] > maxCount){
//             maxChar = char
//             maxCount = charObj[char]
//         }
//     }

//     return maxChar
    
// }
// console.log(maxChar("i loveeeeeeee myselfffffffffffffffffffff"))


// function chunkArray(arr, n){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let item = arr[i]
//         let lastArray = result[result.length-1]
//         if(!lastArray || lastArray.length === n){
//             result.push([item])
//         }else{
//             lastArray.push(item)
//         }
//     }
//     return result
// }
// console.log(chunkArray(["a", "b", "c", 'd', 'b', 't', 'y', 'q'], 4))

function myNumber(n){
    for(let i = 1; i <= n; i++){
        let res = ''
        for(let j = i; j > 0; j--){
            res += "#"
        }

        for(let space = n-1; space > 0; space--){
            res += ' '
        }
        console.log(res)
    }
}
myNumber(4)


// #
// ##
// ###
// ####































