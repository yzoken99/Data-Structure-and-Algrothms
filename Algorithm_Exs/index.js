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





// function countDuplicates(numbers) {
//     let res = []
//     for(let i = 0; i <= numbers.length; i++){
//         for(let j = 1; j <= numbers.length; j++){
//             if(numbers[i] == numbers[j]){
//                 res.push(numbers[i])
//                 // res.push()
//             }
//         }
//     }
//     return res

// }
// console.log(countDuplicates([1,1,2,2,2,3]))


// REVERSE NUMBER IN A EFFICENT WAY

function reverseNum(n){
    let res = parseInt(n.toString().split('').reverse().join(''))
    if(n < 0){
        return res * -1
    }else{
        return res
    }
}
console.log(reverseNum(-123))








